using System.Xml.Linq;
using System.Xml.XPath;
using GrapeCity.ActiveReports.Rendering.Tools;
using GrapeCity.ActiveReports.Web.Designer;
using GrapeCity.ActiveReports.Web.Viewer;
using ReportNotFoundException = GrapeCity.ActiveReports.Web.Designer.ReportNotFoundException;

namespace WebDesigner_CustomSharedDataSources.Implementation;

public class ReportStore : IReportStore
{
	private static readonly string[] ReportExtensions =
	{
		".rdl",
		".rdlx",
		".rdlx-master",
		".rpx"
	};
	
	private readonly Dictionary<string, byte[]> _tempStorage = new Dictionary<string, byte[]>();
	
	private readonly DirectoryInfo _rootDirectory;

	public ReportStore (DirectoryInfo rootDirectory)
	{
		_rootDirectory = rootDirectory;
	}
	
	public ReportDescriptor GetReportDescriptor(string reportId)
	{
		if (_tempStorage.ContainsKey(reportId))
			return new ReportDescriptor(GetReportTypeByExtension(Path.GetExtension(reportId)));
		
		var fileInfo = new FileInfo(Path.Combine(_rootDirectory.FullName, reportId));
		return new ReportDescriptor(GetReportTypeByExtension(fileInfo.Extension));
	}

	public Stream LoadReport(string reportId)
	{
		if (_tempStorage.TryGetValue(reportId, out var tempReport))
			return new MemoryStream(tempReport);
		
		var file = new FileInfo(Path.Combine(_rootDirectory.FullName, reportId));
		
		if (!file.Exists)
			throw new ReportNotFoundException();

		return file.OpenRead();
	}

	public string SaveReport(ReportType reportType, string reportId, Stream reportData, SaveSettings settings = SaveSettings.None)
	{
		if ((settings & SaveSettings.IsTemporary) != 0)
		{
			var tempName = Guid.NewGuid() + GetReportExtension(reportType);
			_tempStorage.Add(tempName, reportData.ToArray());
			return tempName;
		}
		
		var reportFullPath = Path.Combine(_rootDirectory.FullName, reportId);
		using var fileStream = new FileStream(reportFullPath, FileMode.Create, FileAccess.Write);
		reportData.CopyTo(fileStream);

		return reportId;
	}

	public string UpdateReport(ReportType reportType, string reportId, Stream reportData)
	{
		return SaveReport(reportType, reportId, reportData);
	}

	public ReportInfo[] ListReports()
	{
		var reports = _rootDirectory
			.EnumerateFiles("*.*")
			.Where(fileInfo => ReportExtensions.Any(ext =>
				fileInfo.Extension.EndsWith(ext, StringComparison.InvariantCultureIgnoreCase)))
			.Select(fileInfo =>
			{
				var reportType = GetReportTypeByExtension(fileInfo.Extension);
				var rdlSubType = reportType != ReportType.RpxXml ? GetRdlSubType(fileInfo) : null;
				return new ReportInfo()
				{
					Id = fileInfo.Name,
					Name = fileInfo.Name,
					ReportType = reportType,
					RdlSubtype = rdlSubType
				};
			}).ToArray();

		return reports;
	}
	
	private RdlSubtype? GetRdlSubType(FileInfo report)
	{
		XElement rootElement = GetReportContent(report.FullName);
		
		if (HasElement(rootElement, "Body/ReportItems/FixedPage"))
			return RdlSubtype.FixedPage;
		
		if (HasElement(rootElement, "ReportSections/ReportSection"))
		{
			var customProps = GetElement(rootElement, "CustomProperties")?.Nodes();

			if (customProps?.Count() > 0 && customProps.Where(node => node.ToString().Contains("Dashboard")).Any())
				return RdlSubtype.Dashboard;
		}

		return RdlSubtype.MultiSection;
	}

	private static XElement GetElement(XElement rootElement, string path)
	{
		var xPath = string.Join("/", path.Split('/').Select(e => $"*[local-name() = '{e}']"));
		var targetElement = rootElement.XPathSelectElement(xPath);
		return targetElement;
	}

	private static bool HasElement(XElement rootElement, string valuePath)
	{
		var targetElement = GetElement(rootElement, valuePath);
		return targetElement != null;
	}
	
	private static XElement GetReportContent(string reportName)
	{
		try
		{
			using (var streamReader = File.OpenText(reportName))
			{
				return XElement.Load(streamReader);
			}
		}
		catch
		{
			throw new InvalidReportContentException($"Report '{reportName}' XML content is invalid");
		}
	}
	
	private static ReportType GetReportTypeByExtension(string extension)
	{
		switch (extension)
		{
			case ".rdl":
			case ".rdlx":
				return ReportType.RdlXml;
			case ".rdlx-master":
				return ReportType.RdlMasterXml;
			case ".rpx":
				return ReportType.RpxXml;
			default:
				throw new ArgumentOutOfRangeException(nameof(extension), extension, null);
		}
	}
	
	private static string GetReportExtension(ReportType type)
	{
		return type switch
		{
			ReportType.RdlXml => ".rdlx",
			ReportType.RdlMasterXml => ".rdlx-master",
			ReportType.RpxXml => ".rpx",
			_ => throw new ArgumentOutOfRangeException(nameof(type), type, null)
		};
	}

	public void DeleteReport(string reportId)
	{
		if (_tempStorage.ContainsKey(reportId))
		{
			_tempStorage.Remove(reportId);
			return;
		}
        
		var file = new FileInfo(Path.Combine(_rootDirectory.FullName, reportId));
        
		if(file.Exists)
			file.Delete();;
	}
	
}