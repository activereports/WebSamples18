using GrapeCity.ActiveReports.Aspnetcore.Viewer;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using System.Reflection;

DirectoryInfo ReportsDirectory =
    new DirectoryInfo(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? String.Empty, "Reports"));

var builder = WebApplication.CreateBuilder(args);

// Allow client app to be run independently
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost", builder =>
    {
        builder.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost")
        .AllowCredentials()
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});

builder.Services.AddControllersWithViews();

// In production, the React files will be served from this directory
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/build";
});

builder.Services.AddReportViewer();

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

app.UseCors("AllowLocalhost");
app.UseReportViewer(settings =>
{
    settings.UseFileStore(ReportsDirectory);
});

app.UseStaticFiles();
app.UseSpaStaticFiles();

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    _ = app.MapControllerRoute(
        name: "default",
        pattern: "{controller}/{action=Index}/{id?}");
});

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";

    if (app.Environment.IsDevelopment())
    {
        spa.UseReactDevelopmentServer(npmScript: "start");
    }
});

app.Run();