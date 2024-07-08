using GrapeCity.ActiveReports.Aspnetcore.Designer;
using GrapeCity.ActiveReports.Aspnetcore.Viewer;
using GrapeCity.ActiveReports.Web.Designer;
using Microsoft.AspNetCore.SignalR;

var ResourcesRootDirectory =
    new DirectoryInfo(Path.Combine(Directory.GetCurrentDirectory(), "resources"));

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddReportViewer()
                .AddReportDesigner()
                .AddRazorPages()
                .AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);
builder.Services.AddCors();
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

// For use as a server for BlazorWebAssembly
app.UseCors(cors => cors.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost")
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials()
    .WithExposedHeaders("Content-Disposition"));

app.UseReportDesigner(config =>
    config.UseFileStore(ResourcesRootDirectory, null, FileStoreOptions.NestedFoldersLookup));
app.MapBlazorHub();
app.MapFallbackToPage("/_Host");
app.UseRouting();
app.UseStaticFiles();
app.Run();