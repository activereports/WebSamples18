using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace JSViewerReactCore.Controllers
{
    public class HomeController : Controller
    {
        private static readonly string CurrentDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? String.Empty;
        public static readonly DirectoryInfo ReportsDirectory = new DirectoryInfo(Path.Combine(CurrentDir, "Reports"));

        private readonly IWebHostEnvironment _env;
        public HomeController(IWebHostEnvironment env) => _env = env;

        public IActionResult Index()
        {
            return new PhysicalFileResult(Path.Combine(_env.WebRootPath, "index.html"), "text/html");
        }

        [HttpGet("reports")]
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