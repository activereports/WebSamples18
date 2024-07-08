using GrapeCity.ActiveReports.Aspnetcore.Designer;
using GrapeCity.ActiveReports.Aspnetcore.Viewer;
using GrapeCity.ActiveReports.Web.Designer;
using WebDesignerCustomStore.Implementation.Storage;
using WebDesignerCustomStore.Implementation;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddReportViewer()
                .AddReportDesigner()
                .AddSingleton<ICustomStorage>(s =>
                    new WebDesignerCustomStore.Implementation.Database.LiteDB(Path.Combine(Directory.GetCurrentDirectory(), "resources", "lite.db")))
                .AddSingleton<IReportStore>(s => new ReportStore(s.GetRequiredService<ICustomStorage>()))
                .AddSingleton<IResourceRepositoryProvider>(s => new ResourceProvider(s.GetRequiredService<ICustomStorage>()))
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
});
app.UseFileServer();
app.UseMvc();
app.Run();