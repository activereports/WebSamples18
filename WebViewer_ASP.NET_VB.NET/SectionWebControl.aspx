<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="SectionWebControl.aspx.vb" Inherits="GrapeCity.ActiveReports.Samples.Web.SectionWebControl" culture="auto"%>
<%@ Register TagPrefix="activereportsweb" Namespace="GrapeCity.ActiveReports.Web" assembly="MESCIUS.ActiveReports.Web" %>

<!DOCTYPE html>

<style>
    html, body {
      width: 100%; 
      height: 100%; 
      margin: 0; 
      padding: 0;
    }
</style>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title>MESCIUS ActiveReports WebViewer Control</title>
        <link rel="stylesheet" type="text/css" href="CSS/default.css"/>
        <link rel="stylesheet" type="text/css" href="CSS/tab.css" />
        <script src="Scripts/tab.js" language="javascript" type="text/javascript"></script>
        <script>
            // default tab:
            window.onload = function() {
                document.getElementById("htmlBtn").click();
            };
        </script>
    </head>

    <body>
        <div id="pagetop" style="z-index: 101">
            <div id="pagetitlebanner">
                <h1>
                    <a href="Default.aspx">ActiveReports Standard Edition Web Sample</a></h1>
                <h2>
                    <a href="WebControl.aspx">WebViewerControl Sample</a></h2>
                <h2>
                    Section Report for ASP.NET</h2>
            </div>
        </div>
         <div class="content" style="overflow: auto">
            The ActiveReports WebControl allows you to easily publish simple reports to the
            web for viewing in the browser. The client machine will not require ActiveReports,
            nor ASP.NET to be installed. Below is a simple example of the ActiveReports web
            control. To use the webcontrol you simply
            select an ActiveReport using the ReportName property of the webcontrol in the property
            list. Alternatively, you can set the ReportName property programmatically to a new instance
            of an ActiveReport class.
        </div>
        <!-- Tab links -->
        <div class="tab">
            <button id="htmlBtn" class="tablinks" onclick="clickOnTab(event, 'HtmlViewer')">Html Viewer</button>
            <button id="rawBtn"  class="tablinks" onclick="clickOnTab(event, 'RawHtml')">Raw Html</button>
            <button id="pdfBtn"  class="tablinks" onclick="clickOnTab(event, 'AcrobatReader')">Acrobat Reader</button>
        </div>
        <!-- Tab content -->
        <div id="HtmlViewer" class="tabcontent">
            <ActiveReportsWeb:WebViewer class="viewer" ViewerType="HtmlViewer" ReportName="RpxReports\\Invoice.rpx" runat="server"/>
        </div>
        <div id="RawHtml" class="tabcontent">
            <ActiveReportsWeb:WebViewer class="viewer" ViewerType="RawHtml" ReportName="RpxReports\\Invoice.rpx" runat="server"/>
        </div>
        <div id="AcrobatReader" class="tabcontent">
            <ActiveReportsWeb:WebViewer class="viewer" ViewerType="AcrobatReader" ReportName="RpxReports\\Invoice.rpx" runat="server"/>
        </div>
    </body>
</html>