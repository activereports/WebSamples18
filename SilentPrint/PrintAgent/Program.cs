using PrintAgent;
using PrintAgent.Configuration;
using PrintAgent.Interfaces;
using PrintAgent.Services;
using System.Diagnostics;

var isService = !(Debugger.IsAttached || args.Contains("--console"));

if (isService)
{
    var pathToExe = Environment.ProcessPath;
    var pathToContentRoot = Path.GetDirectoryName(pathToExe);
    Directory.SetCurrentDirectory(pathToContentRoot);
}

var builder = WebApplication.CreateBuilder(args);

// Add configuration to the container.
builder.Configuration.SetBasePath(Directory.GetCurrentDirectory())
                     .AddJsonFile("appsettings.json", optional: false)
                     .Build();

builder.Logging.AddConsole();

builder.WebHost.UseUrls(builder.Configuration.GetValue<string>("Application:Urls"))
               .UseKestrel();

// Add services to the container.
builder.Services.AddSingleton<IPdfPrintService, PdfPrintService>()
                .AddRouting()
                .AddControllers();
builder.Services.Configure<AppConfig>(builder.Configuration.GetSection("application"));


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

app.UseCors(policy =>
{
    policy
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod();
});
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

if (isService)
    app.RunAsService();
else
    app.Run();