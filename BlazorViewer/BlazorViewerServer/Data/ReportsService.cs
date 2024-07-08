using System.Reflection;

namespace BlazorViewerServer.Data
{
    public class ReportsService
    {
        private static readonly string CurrentDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? String.Empty;
        public static readonly DirectoryInfo ReportsDirectory = new DirectoryInfo(Path.Combine(CurrentDir, "Reports"));

        public IEnumerable<string> GetReports()
        {
            string[] validExtensions = { ".rdl", ".rdlx", ".rdlx-master", ".rpx" };
            return GetFileStoreReports(validExtensions);
        }

        /// <summary>
        /// Gets report names from folder
        /// </summary>
        /// <returns>Report names</returns>
        private string[] GetFileStoreReports(string[] validExtensions)
        {
            return ReportsDirectory
                .EnumerateFiles("*.*")
                .Select(x => x.Name)
                .Where(x => validExtensions.Any(x.EndsWith))
                .ToArray();
        }

    }
}
