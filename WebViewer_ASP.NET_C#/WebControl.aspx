<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebControl.aspx.cs" Inherits="GrapeCity.ActiveReports.Samples.Web.WebControl" culture="auto"%>
<%@ Register TagPrefix="activereportsweb" Namespace="GrapeCity.ActiveReports.Web" assembly="MESCIUS.ActiveReports.Web" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" type="text/css" href="CSS/default.css"/>
    <title>MESCIUS ActiveReports WebViewer Control</title>
</head>
<body>
    
    <div id="pagetop">
        <div id="pagetitlebanner">
            <h1>
                <a href="Default.aspx">ActiveReports Standard Edition Web Sample</a></h1>
            <h2>
                WebViewerControl Sample</h2>
        </div>
    </div>
    <div id="pagebody">
     <h2>
            ActiveReports for ASP.NET Standard Edition Options</h2>
        <!-- WebControls -->
        <p>
            <a href="SectionWebControl.aspx">Section report for ASP.NET</a>
        </p>
        <p>
            <a href="PageWebControl.aspx">Page Report for ASP.NET</a>
        </p>
        <p>
            <a href="RdlxWebControl.aspx">RDLX Report for ASP.NET</a>
        </p>
        <br/>
        For easy to use, robust browser based viewing and easy drag-and-drop development
        ActiveReports includes the server side ASP.NET WebControl. The web control supports
        the following <b>viewer types</b> for viewing reports in the browser:

        <dl>
            <dt>
            Html Viewer
            </dt>
            <dd>
                &nbsp;Provides a scrollable view of a single page of the report at a time. Downloads
            only HTML and JavaScript to the client browser. Not preferable for printable output.
            </dd>
            <dt>
            PDF Reader
            </dt>
            <dd>
                Returns output as a PDF document viewable in Adobe Reader. Client Requirements:
            Adobe Reader.
            </dd>
            <dt>
            Raw Html
            </dt>
            <dd>
                Shows all pages in the report document as a single HTML continuous page. Provides
                a static view of the entire report document, and usually decent printable output,
                although under some circumstances, pagination is not preserved. 
            </dd>
        </dl>

    </div>
    <form id="form1" runat="server">
    </form>
</body>
</html>
