using GrapeCity.ActiveReports.Aspnetcore.Viewer;
using System.Reflection;

DirectoryInfo ReportsDirectory =
    new DirectoryInfo(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? String.Empty, "Reports"));

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddLogging(config =>
				{
					// Disable the default logging configuration
					config.ClearProviders();

					// Enable logging for debug mode only
					if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == Environments.Development)
					{
						config.AddConsole();
					}
				})
				.AddReportViewer()
				.AddMvc(options => options.EnableEndpointRouting = false);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Error");
}

// Configure CORS
app.UseCors(cors => cors.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost")
	.AllowAnyMethod().AllowAnyHeader().AllowCredentials().WithExposedHeaders("Content-Disposition"));

app.UseReportViewer(settings =>
{
    settings.UseFileStore(ReportsDirectory);
});

app.UseFileServer();
app.UseMvc();

app.Run();