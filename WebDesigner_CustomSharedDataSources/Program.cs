using GrapeCity.ActiveReports.Aspnetcore.Designer;
using GrapeCity.ActiveReports.Aspnetcore.Viewer;
using GrapeCity.ActiveReports.Web.Designer;
using WebDesigner_CustomSharedDataSources.Implementation;

DirectoryInfo ResourcesRootDirectory =
    new DirectoryInfo(Path.Combine(Directory.GetCurrentDirectory(), "resources" + Path.DirectorySeparatorChar));

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddReportViewer()
                .AddReportDesigner()
                .AddSingleton<IReportStore>(new ReportStore(ResourcesRootDirectory))
                .AddSingleton<IResourceRepositoryProvider>(new ResourceProvider(ResourcesRootDirectory))
                .AddMvc(options => options.EnableEndpointRouting = false)
                .AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);


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

app.UseReportDesigner(config =>
{
    config.UseReportsProvider(app.Services.GetRequiredService<IReportStore>());
    config.UseResourcesProvider(app.Services.GetRequiredService<IResourceRepositoryProvider>());
    config.UseConfig(Path.Combine(System.Environment.CurrentDirectory, "ActiveReports.config"));
});
app.UseDefaultFiles();
app.UseStaticFiles();
app.Run();