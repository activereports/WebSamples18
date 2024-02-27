# ActiveReports Web Designer Reference

This document provides information on how to set up AR Web Designer.

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
	<!--
		Note: Page title is updated automatically.
		You can alter this behavior by disabling it or providing a custom update function:

		create('ar-web-designer', {
			disabled: true,
			title: { onUpdate: (info) => { ... your code here ... } },
		});

		See detailed API info in ar-web-designer-api.d.ts
	-->
	<title>ActiveReports Web Designer</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="x-ua-compatible" content="ie=edge">

	<link rel="stylesheet" href="vendor/css/bootstrap.css" />
	<link rel="stylesheet" href="vendor/css/fonts-googleapis.css" type="text/css">

	<!-- Optional. Resets browser's default style which allows the Designer to occupy the whole page -->
	<style>
		html, body { width: 100%; height: 100%; margin: 0; padding: 0 }
	</style>

	<!-- Required for the AR Web Viewer -->
	<link rel="stylesheet" href="jsViewer.min.css" />
	<link rel="stylesheet" href="web-designer.css" />
</head>

<body>
	<!-- Required for the AR Web Viewer -->
	<script src="jsViewer.min.js"></script>
	<script src="web-designer.js"></script>

	<!-- Important! Designer requires a defined size or a container to fill -->
	<div id="ar-web-designer" style="width: 100%; height: 100%;"></div>

	<script>
		/* Required for the AR Web Viewer */
		var viewer = null;

		GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			appBar: {
				/* Optional */
				saveButton: { visible: false },

				/* Optional */
				saveAsButton: { visible: false },
			},

			data: {
				/* Optional */
				dataSets: { canModify: true },

				/* Optional */
				dataSources: { canModify: true },
			},

			server: {
				/* Optional */
				url: 'api'
			},

			preview: {
				/* Required for the AR Web Viewer */
				openViewer: ({ element, documentInfo: { id: documentId } }) => {
					if (viewer) {
						viewer.openReport(documentId);
						return;
					}

					viewer = GrapeCity.ActiveReports.JSViewer.create({
						element: '#' + element,
						reportID: documentId,
						renderFormat: options.preferredFormat || 'html',
						reportService: {
							url: 'api/reporting',
						},
						settings: {
							zoomType: 'FitPage',
						},
					});
				}
			},
		});
	</script>
</body>

</html>
```

## Custom Localization

### Basic Sample Custom Localization JSON

Here a **common** namespace is used as an example for the **Custom Localization** feature.

* **"ns"** property is a **namespace**. It shouldn't be translated and is required for proper work of the **Custom Localization** feature. Required.
* **"lng"** property is a **language**. For example, "es" for Spanish. Required
* **"resources"** A map of localization resources used in the corresponding namespace. Contents of this property require translation. Required.

```json
[
	{
		"ns": "common",
		"lng": "ja",
		"resources": {
			"units": {
				"cm": {
				"textShortName": "cm",
				"textFullName": "センチメートル"
				},
				"in": {
				"textShortName": "in",
				"textFullName": "インチ"
				}
			},
			"btnAdd": "追加",
			"btnOk": "OK",
			"btnCancel": "キャンセル",
			"btnSave": "保存",
			"textOpen": "開く..."
		}
	}
]
```

### Common

If you would like to utilize the **Custom Localization** feature:
1. You need to translate the **resources** from the **custom-resources.json** file.
2. Add translated resources fo the AR Web Designer **before** the instance is created.

**Example:**

```javascript
GrapeCity.ActiveReports.Designer.addLanguage('fr', [
	{
		"ns": "common",
		"lng": "ja",
		"resources": {
			"btnAdd": "追加",
			"btnCancel": "キャンセル",
			"btnSave": "保存",
			"textOpen": "開く..."
			/* ... */
		}
	},
	/* ... Other Namespaces ... */
]);

GrapeCity.ActiveReports.Designer.create('#ar-web-designer');
```

### Name Templates

In *custom-resources.json* there is a **"nameTemplates"** namespace. Values in these sections are expected to be **alphanumeric identifiers**. I.e., they can contain only **letters** and **digits** but cannot start with a digit. The same is applicable to **"textDataSourceNameTemplate"** property from the *dataSourceEditor* namespace.

### Parameters

Please note that some resource strings have parameters. They are enclosed in double curly braces:

```javascript
	"textFieldsCount": "{{count}} fields",
	"textFieldsCount_plural": "{{count}} fields",
```

**DO NOT** translate them. Translate only surrounding text:

```javascript
    "textFieldsCount_0": "{{count}} pól",
    "textFieldsCount_1": "{{count}} pole",
    "textFieldsCount_2": "{{count}} pola",
```

You can move them to a different part of the sentence according to the language you're translating to
