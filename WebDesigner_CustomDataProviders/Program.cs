using C1.AdoNet.OData;
using GrapeCity.ActiveReports.Aspnetcore.Designer;
using GrapeCity.ActiveReports.Aspnetcore.Viewer;
using WebDesignerCustomDataProviders;

DirectoryInfo ResourcesRootDirectory =
    new DirectoryInfo(Path.Combine(Directory.GetCurrentDirectory(), "resources" + Path.DirectorySeparatorChar));

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddReportViewer()
                .AddReportDesigner()
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
    config.UseFileStore(ResourcesRootDirectory);
    config.UseDataProviders(
    [
        new GrapeCity.ActiveReports.Web.Designer.DataProviderInfo("ODATA",
            typeof(C1ODataProviderFactory).AssemblyQualifiedName,
            typeof(C1ODataConnectionAdapter).AssemblyQualifiedName)
    ]);
    config.OmitViewerConfiguration = true;
});

app.UseReportViewer(config =>
{
    config.UseFileStore(ResourcesRootDirectory);
    config.UseDataProviders(
    [
        new GrapeCity.ActiveReports.Web.Viewer.DataProviderInfo("ODATA",
            typeof(C1ODataProviderFactory).AssemblyQualifiedName,
            typeof(C1ODataConnectionAdapter).AssemblyQualifiedName)
    ]);
});
app.UseFileServer();
app.UseMvc();
app.Run();