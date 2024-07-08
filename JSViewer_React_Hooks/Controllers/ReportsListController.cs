using Microsoft.AspNetCore.Mvc;
using System.Reflection;


namespace JSViewer_React_Hooks.Controllers
{
    [Route("[controller]")]
    public class ReportsListController : Controller
    {
        private static readonly string CurrentDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? String.Empty;
        public static readonly DirectoryInfo ReportsDirectory = new DirectoryInfo(Path.Combine(CurrentDir, "Reports"));

        [HttpGet]
        public IEnumerable<string> Get()
        {
            string[] validExtensions = { ".rdl", ".rdlx", ".rdlx-master" };
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
