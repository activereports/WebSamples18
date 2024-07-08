using GrapeCity.ActiveReports.Aspnetcore.Designer;
using GrapeCity.ActiveReports.Aspnetcore.Viewer;
using GrapeCity.ActiveReports.Web.Designer;
using WebDesigner_Custom.Data;
using WebDesigner_Custom.Implementation;
using WebDesigner_Custom.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddReportViewer()
                .AddReportDesigner()
                .AddDbContext<ReportsDbContext>(ServiceLifetime.Singleton)
                .AddSingleton<ReportService>()
                .AddSingleton<IReportStore>(s => new ReportStore(s.GetRequiredService<ReportService>()))
                .AddSingleton<IResourceRepositoryProvider, ResourceProvider>()
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