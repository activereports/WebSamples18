using Microsoft.AspNetCore.Mvc;

namespace JSViewerVueCore.Controllers
{
    public class HomeController : Controller
    {
        public static string EmbeddedReportsPrefix = "JSViewer_Vue_Core.Reports";

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

            var reportsList = GetEmbeddedReports(validExtensions);
            return new ObjectResult(reportsList);
        }

        /// <summary>
        /// Gets report names from assembly resources
        /// </summary>
        /// <returns>Report names</returns>
        private static string[] GetEmbeddedReports(string[] validExtensions) =>
            typeof(HomeController).Assembly.GetManifestResourceNames()
                .Where(x => x.StartsWith(EmbeddedReportsPrefix))
                .Where(x => validExtensions.Any(x.EndsWith))
                .Select(x => x.Substring(EmbeddedReportsPrefix.Length + 1))
                .ToArray();
    }
}