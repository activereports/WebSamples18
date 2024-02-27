<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ParameterReport.aspx.cs" Inherits="GrapeCity.ActiveReports.Samples.Web.ParameterReport" %>
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
    <link rel="stylesheet" type="text/css" href="CSS/default.css"/>
    <title>MESCIUS ActiveReports Parameterized Report</title>
</head>

<body>

    <div id="pagetop">
        <div id="pagetitlebanner">
            <h1>
                <a href="Default.aspx">ActiveReports Standard Edition Web Sample</a></h1>
            <h2>
                Parameterized Report Sample</h2>
        </div>
    </div>

    <form id="form1" runat="server">
        <div id="navigation">
            <div class="content" style="overflow: auto">
                <p>Select Order Date</p>
                <asp:Panel ID="Panel1" runat="server" GroupingText="Date Picker" Height="236px" 
                    Width="250px" Direction="LeftToRight" Style="float:left">
                    &nbsp;<asp:Calendar id="Calendar1" runat="server" Width="167px" Height="61px"  
                        Font-Names="Verdana" Font-Size="Small" 
                        onselectionchanged="Calendar1_SelectionChanged">
	                </asp:Calendar>
                </asp:Panel>
            </div>
        </div>
        <p style="clear:left"></p>

    </form>

    <ActiveReportsWeb:WebViewer  ID="WebViewer" class="viewer" ViewerType="HtmlViewer" runat="server"/>

</body>
</html>
