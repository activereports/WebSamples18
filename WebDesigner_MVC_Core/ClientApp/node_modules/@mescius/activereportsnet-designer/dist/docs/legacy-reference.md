# ActiveReports Web Designer Reference

This document provides information on how to set up Web Designer.

- [ActiveReports Web Designer Reference](#activereports-web-designer-reference)
	- [Code Snippets](#code-snippets)
		- [General](#general)
	- [Custom Localization](#custom-localization)
		- [Basic Sample Custom Localization JSON](#basic-sample-custom-localization-json)
		- [Common](#common)
		- [Name Templates](#name-templates)
		- [Parameters](#parameters)

## Code Snippets

### General

```html
<!DOCTYPE html>
<html lang="en">

<head>

	<title>ActiveReports Web Designer</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="x-ua-compatible" content="ie=edge">

	<link rel="stylesheet" href="vendor/css/bootstrap.css" />
	<link rel="stylesheet" href="vendor/css/fonts-googleapis.css" type="text/css">

	<!-- Optional: Required for Report Viewer -->
	<link rel="stylesheet" href="jsViewer.min.css" />

	<link rel="stylesheet" href="web-designer.css" />

</head>

<body>

	<!-- Optional: Required for Report Viewer -->
	<script src="jsViewer.min.js"></script>

	<script src="web-designer.js"></script>

	<div id="designer-id" style="width: 100%; height: 100%;"></div>

	<script>

		var designerOptions = GrapeCity.ActiveReports.WebDesigner.createDesignerOptions();
		designerOptions.server.url = 'api';

		/* Optional: Open Report */
		designerOptions.openButton.visible = true;

		/* Optional: Save Report */
		designerOptions.saveButton.visible = true;

		/* Optional: Save Report As */
		designerOptions.saveAsButton.visible = true;

		/* Optional: Add/Edit/Remove Data Sets */
		designerOptions.dataTab.dataSets.canModify = true;

		/* Optional: Add/Edit/Remove Data Sources */
		designerOptions.dataTab.dataSources.canModify = true;

		/* Optional: Required for Report Viewer */
		var viewer = null;
		designerOptions.openViewer = function(options) {
			if (viewer) {
				viewer.openReport(options.reportInfo.id);
				return;
			}

			viewer = GrapeCity.ActiveReports.JSViewer.create({
				locale: options.locale,
				element: '#' + options.element,
				reportService: {
					url: 'api/reporting',
				},
				reportID: options.reportInfo.id,
				settings: {
					zoomType: 'FitPage',
				},
			});
		};

		GrapeCity.ActiveReports.WebDesigner.renderApplication('designer-id', designerOptions);

	</script>

</body>

</html>
```

## Custom Localization

### Basic Sample Custom Localization JSON

Here *data-set-picker* namespace is used as an example for the **Custom Localization** feature.

* **"ns"** property is a **namespace** – it shouldn't be translated - it is required for proper work of the **Custom Localization** feature
* **"lng"** property is a **locale** - it should be replaced with a proper locale - for example, "es" for Spanish
* **"resources"** property contains localization resources used in the corresponding namespace - contents of this property require translation

```json
[
	{
		"ns": "data-set-picker",
		"lng": "<custom-locale>",
		"resources": {
			"add": "Add",
			"cancel": "Cancel",
			"gettingContent": "Getting the resource content...",
			"gettingDataResources": "Getting the list of available data resources...",
			"header": "Pick a Data Set",
			"noDataResourcesAvailable": "No data resources available",
			"searchBoxPlaceholder": "enter data resource name here..."
		}
	}
]
```

### Common

If you would like to utilize the **Custom Localization** feature:
1. You need to translate the **resources** sections from the **designer-custom-localization.json** file.
2. Also it is required to replace **custom-locale** stub with your locale.
3. Pass the translated **designer-custom-localization.json** contents to the **localeData** property of the created **designerOptions**.

**Example:**

```javascript
var designerOptions = GrapeCity.ActiveReports.WebDesigner.createDesignerOptions();

designerOptions.localeData = [
	{
		"ns": "data-set-picker",
		"lng": "es",
		"resources": {
			"add": "Agregar",
			"cancel": "Cancelar",
			// ... other translated localization resources
		}
	}
];

GrapeCity.ActiveReports.WebDesigner.renderApplication('designer-id', designerOptions);
```

### Name Templates

In *designer-custom-localization.json* **"resources"** sections there are **"nameTemplates"** sub-sections. Values in these sections are expected to be alphanumeric identifiers. I.e., they can contain only **letters** and **digits** but cannot start with a digit. The same is applicable to **"dataSourceNameTemplate"** property from *data-source-editor* namespace **"resources"** section.

### Parameters

Please note some resource strings have parameters - they are in curly braces {} - you don't need to translate parameter labels:

```javascript
"versionLabel": "Version: {versionNumber}"
/* {versionNumber} is a parameter - it doesn't require translation - only text is translated */
"versionLabel": "Versión: {versionNumber}"
```
