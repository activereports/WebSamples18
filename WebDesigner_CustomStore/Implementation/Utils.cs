using System.Drawing;
using System.Xml.Linq;
using System.Xml.XPath;
using GrapeCity.ActiveReports.Web.Designer;
using GrapeCity.Documents.Imaging;
	
namespace WebDesignerCustomStore.Implementation
{
	public static class Utils
	{
		/// <summary>
		/// Resizes the input image to 128x128 by default.
		/// Used to display a thumbnail in the image list. 
		/// </summary>
		/// <param name="image">Image represented as an array of bytes.</param>
		/// <param name="size">Size to resize. 128x128 by default.</param>
		/// <returns>The content of the thumbnail, represented as bytes.</returns>
		public static byte[] GetImageThumbnail(byte[] image, Size? thumbnailSize = null)
		{
			using var stream = new MemoryStream(image);
			using var original = new GcBitmap(stream);

			var size = thumbnailSize ?? new(128, 128);
			var thumbnail = original.Resize(size.Width, size.Height);
			using var thumbnailStream = new MemoryStream();

			thumbnail.SaveAsPng(thumbnailStream);
			return thumbnailStream.ToArray();
		}
		
		public static RdlSubtype? GetRdlSubType(Stream report)
		{
			XElement rootElement = GetReportContent(report);
		
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

		private static XElement GetReportContent(Stream report)
		{
			try
			{
				return XElement.Load(report);
			}
			catch
			{
				throw new InvalidReportContentException("Report XML content is invalid");
			}
		}
	}
}
