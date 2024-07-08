using GrapeCity.ActiveReports.Aspnetcore.Designer;
using GrapeCity.ActiveReports.Aspnetcore.Viewer;
using GrapeCity.ActiveReports.Web.Designer;
using Microsoft.AspNetCore.SignalR;
using WebDesigner_Blazor_Custom.Data;
using WebDesigner_Blazor_Custom.Implementation;
using WebDesigner_Blazor_Custom.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddReportViewer()
                .AddReportDesigner()
                .AddDbContext<ReportsDbContext>(ServiceLifetime.Singleton)
                .AddSingleton<ReportService>()
                .AddSingleton<IReportStore>(s => new ReportStore(s.GetRequiredService<ReportService>()))
                .AddSingleton<IResourceRepositoryProvider, ResourceProvider>()
                .AddRazorPages()
                .AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);
builder.Services.AddServerSideBlazor();
builder.Services.Configure<HubOptions>(options =>
{
    options.MaximumReceiveMessageSize = 524288000; //500MB
});

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
app.MapBlazorHub();
app.MapFallbackToPage("/_Host");
app.UseHttpsRedirection();
app.UseRouting();
app.UseStaticFiles();
app.Run();