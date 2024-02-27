<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="GrapeCity.ActiveReports.Samples.Web._Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" type="text/css" href="CSS/default.css"/>
    <title>ActiveReports Standard Edition Web Sample</title>
</head>
<body>
    
    <div id="pagetop">
        <div id="pagetitlebanner">
            <h1>
                <a href="Default.aspx">ActiveReports Standard Edition Web Sample</a></h1>
        </div>
    </div>
    <div id="pagebody">
     <h2>
            ActiveReports for ASP.NET Standard Edition Options</h2>
        <!-- WebControl -->
        <p>
            <a href="WebControl.aspx">WebControl for ASP.NET</a>
            <br/>
            This sample demonstrates how an easy way to start development ActiveReports.
        </p>
        <br/>
        <!-- Raw Exporting -->
        <p>
            <a href="ParameterReport.aspx">Parameterized Report Sample</a>
            <br/>
            This sample demonstrates how to generate a report by passing a parameter 
            to the report.
        </p>

    </div>
    <form id="form1" runat="server">
    </form>
</body>
</html>
