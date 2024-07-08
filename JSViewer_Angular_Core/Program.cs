using GrapeCity.ActiveReports.Aspnetcore.Viewer;
using System.Reflection;

DirectoryInfo ReportsDirectory =
    new DirectoryInfo(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? String.Empty, "Reports"));

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddReportViewer()
                .AddControllersWithViews();


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

app.UseReportViewer(settings =>
{
    settings.UseFileStore(ReportsDirectory);
});
app.UseRouting();
app.UseStaticFiles();

app.MapControllerRoute(
            name: "default",
            pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();