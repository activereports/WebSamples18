using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace JSViewer_Angular_Core.Controllers
{
    [Route("[controller]")]
    public class ReportsController : Controller
    {
        private static readonly string CurrentDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? System.String.Empty;
        public static readonly DirectoryInfo ReportsDirectory = new DirectoryInfo(Path.Combine(CurrentDir, "Reports"));

        [HttpGet("")]
        public ActionResult Reports()
        {
            string[] validExtensions = {".rdl", ".rdlx", ".rdlx-master", ".rpx"};

            var reportsList = GetFileStoreReports(validExtensions);
            return new ObjectResult(reportsList);
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