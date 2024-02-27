/* eslint-disable max-len */
/**
 * Type of **GrapeCity.ActiveReports.WebDesignerV2** object exported by **web-designer.js** module.
 */

export type GlobalDesignerApiV2 = {
	/**
	 * Renders **Web Designer** to **<div>** element with id **designerElementId** using the specified **DesignerOptions** object.
	 *
	 * **Example:**
	 * ```javascript
	 * GrapeCity.ActiveReports.WebDesigner.create('designer-id', designerOptions);
	 * ```
	 *
	 * @param designerElementId string
	 * @param designerOptions DesignerOptions object
	 * @returns DesignerApi of this instance
	 */
	create: (designerElementId: string, designerOptions: DesignerOptions) => Promise<DesignerApiV2>;

	/**
	 * Returns DesignerApi of previously created instance of **WebDesigner**
	 */
	apiOf: (designerElementId: string) => DesignerApiV2 | undefined;
};


/**
 * Type of object returned by functions from **GlobalDesignerApiV2**
 */
export type DesignerApiV2 = {

	/**
	 * Returns focus to Designer. Focus may be lost when plug-in components are opened/closed.\
	 * Returning focus is essential to continue using Designer hotkeys like Ctrl+Z (undo), Ctrl+Y (redo), etc.
	 *
	 * **Example:**
	 * ```javascript
	 * GrapeCity.ActiveReports.WebDesignerV2.apiOf('designer-id').focus();
	 * ```
	 */
	focus: () => void;

	/**
	 * Returns **AboutInfo** object containing information about application name/version and product title/version.
	 *
	 * **Example:**
	 * ```javascript
	 * var aboutInfo = GrapeCity.ActiveReports.WebDesignerV2.apiOf('designer-id').getAboutInfo();
	 * ```
	 */
	getAboutInfo: () => AboutInfo;


	/**
	 * Returns **HelpInfo[]** containing title/link pairs of Designer-related Help pages.
	 *
	 * **Example:**
	 * ```javascript
	 * var helpInfos = GrapeCity.ActiveReports.WebDesignerV2.apiOf('designer-id').getHelpInfos();
	 * ```
	 */
	getHelpInfos: () => HelpInfo[];

	/**
	 * This object includes functions allowing to create/open/save report, etc.
	 */
	document: DocumentApi;
};

/**
 * This is V2 api, for legacy see ReportingApi
 */
export type DocumentApi = {
	/**
	 * Indicates whether report has unsaved changes.
	 *
	 * **Example:**
	 * ```javascript
	 * var hasUnsavedChanges = GrapeCity.ActiveReports.WebDesignerV2.apiOf('designer-id').hasUnsavedChanges();
	 * if (hasUnsavedChanges) console.log('Currently edited report has unsaved changes.');
	 * ```
	 */
	hasUnsavedChanges: () => boolean;

	/**
	 * Indicates whether report was saved before at least once
	 */
	isNew: () => boolean;

	/**
	 * Returns information about the currently edited report.
	 *
	 * **Example:**
	 * ```javascript
	 * var reportInfo = GrapeCity.ActiveReports.WebDesignerV2.apiOf('designer-id').info();
	 * console.log(`Report "${reportInfo.name}" is currently edited.`);
	 * ```
	 */
	info: () => CurrentReportInfo;

	/**
	 * Creates a new report to be edited in Designer using the specified **CreateReportOptions** object.
	 *
	 * **Example:**
	 * ```javascript
	 * var api = GrapeCity.ActiveReports.WebDesignerV2.apiOf('designer-id');
	 * api.document.create().then(() => {
	 * 		console.log('An empty RDL report is created.');
	 * })
	 * ```
	 *
	 * @param options CreateReportOptions object
	 */
	create: (options?: CreateReportOptions) => Promise<CreateReportInfo>;

	/**
	 * Shows open report dialog
	 */
	open: () => void;

	/**
	 * Opens an existing report to be edited in Designer with specified id.
	 * Optionally you can pass name and content, else it will be loaded from server.
	 *
	 * **Example:**
	 * ```javascript
	 * var api = GrapeCity.ActiveReports.WebDesignerV2.apiOf('designer-id');
	 * api.document.openById('MyReport.rdlx').then(() => {
	 *   console.log('An existing report "MyReport.rdlx" is opened.');
	 * });
	 * var reportContent = { Type: 'report', Body: { ReportItems: [ {Type: 'textbox', Name: 'TextBox1', Width: '5in', Height: '1in' } ] }};
	 * api.document.openById('NewReport.rdlx', 'NewReport', reportContent).then(() => {
	 *   console.log('New report with one textbox created and opened.');
	 * });
	 * ```
	 *
	 * @param options OpenReportOptions object
	 */
	openById: (id: string, name?: string, content?: any) => Promise<OpenReportInfo>;

	/**
	 *  Saves the report currently edited in Designer, if report is new, then "Save As" dialog will be opened.
	 */
	save: () => void;

	/**
	 * Opens "Save As" dialog
	 */
	saveAs: () => void;

	/**
	 * Saves the report currently edited in Designer using the specified **id**.
	 *
	 * **Example:**
	 * ```javascript
	 * var api = GrapeCity.ActiveReports.WebDesignerV2.apiOf('designer-id');
	 * api.document.saveById('MyReport.rdlx')
	 * ```
	 * @param options SaveReportOptions object
	 */
	saveById: (id?: string, name?: string) => Promise<SaveReportInfo>;

	/**
	 * Saves the report currently edited in Designer using the specified **name**.
	 *
	 * **Example:**
	 * ```javascript
	 * var api = GrapeCity.ActiveReports.WebDesignerV2.apiOf('designer-id');
	 * api.document.saveById('MyReport.rdlx')
	 * ```
	 * @param options SaveReportOptions object
	 */
	saveByName: (name: string) => Promise<SaveReportInfo>;

};

export type DesignerOptions = {
	/**
	 * Specifies language to use for the Designer.
	 * If **language** is not specified, browser preferences are used.
	 * **Example:**
	 * ```javascript
	 * designerOptions.language = 'ja';
	 * ```
	 */
	language?: string;

	/**
	 * @deprecated Use **language** instead
	 *
	 * Specifies locale used for displaying Designer.
	 * If **locale** is not specified explicitly here, the locale corresponding to the browser preferences is used.
	 * **Example:**
	 * ```javascript
	 * designerOptions.locale = 'ja';
	 * ```
	 */
	locale?: 'en' | 'ja' | 'zh';

	/**
	 * @deprecated Use resource bundles instead
	 *
	 * Specifies custom localization data.
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.localeData = customLocaleData;
	 * ```
	 */
	localeData?: {
		/** namespace */
		ns: string;

		/** locale */
		lng: string;

		/** localization resources */
		resources: any;
	}[];

	/**
	 * Specifies the default measurement units used in Designer.
	 * By default units = 'in'
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.units = 'cm';
	 * ```
	 */
	units?: 'in' | 'cm';

	/**
	 * Specifies the list of fonts displayed in font properties drop-downs all over Designer.
	 * If **fonts** are not specified explicitly here, the default list of fonts is used:
	 *	'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Geneva', 'Georgia', 'Helvetica',
	 *	'Impact', 'Lucida Console', 'Meiryo', 'Meiryo UI', 'MingLiU', 'MingLiU-ExtB', 'MS Gothic', 'MS Mincho',
	 *	'MS PGothic', 'MS PMincho', 'MS Song', 'MS UI Gothic', 'NSimSun', 'Osaka', 'PMingLiU', 'PMingLiU-ExtB',
	 *	'SimSun', 'SimSun-ExtB', 'Song', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana', 'Yu Gothic'.
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.fonts = ['Arial', 'Courier New', 'Times New Roman'];
	 * ```
	 */
	fonts?: string[];

	/**
	 * It is possible to limit and/or reorder available report items.
	 * Specify comma-separated report items keys from this list:
	 *
	 * ```none
	 * BandedList, Barcode, Bullet, Chart, CheckBox, Container, FormattedText, Image, InputField, Line, List,
	 * OverflowPlaceholder, Shape, Sparkline, Subreport, Table, TableOfContents, Tablix, TextBox
	 * ```
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.reportItems = 'TextBox,CheckBox,Table,Chart,Image';
	 * ```
	 */
	reportItems?: string;

	/**
	 * Customizable report items features are specified here.
	 */
	reportItemsFeatures: {
		/** Barcode features */
		barcode: {
			/**
			 * Limits the list of barcode symbologies available for creation.\
			 * By default all barcode symbologies supported by ActiveReports are available.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.reportItemsFeatures.barcode.symbologies = ['Code_128_A', 'Code_128_B', 'Code_128_C'];
			 * ```
			 */
			symbologies?: BarcodeSymbology[];
		};

		/** Table features */
		table: {
			/**
			 * Specifies whether **Table Header** needs to be auto-filled when a field is dropped to **Table Details**.\
			 * For example, if **ProductName** field is dropped to **Details**, **Product Name** value is set to **Header**.\
			 * By default this feature is **enabled**.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.reportItemsFeatures.table.autoFillHeader = false;
			 * ```
			 */
			autoFillHeader: boolean;

			/**
			 * Specifies whether **Table Footer** needs to be auto-filled when a field is dropped to **Table Details**.\
			 * For example, if **ProductName** field is dropped to **Details**, **=Count([ProductName])** value is set to **Footer**.\
			 * By default this feature is **disabled**.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.reportItemsFeatures.table.autoFillFooter = true;
			 * ```
			 */
			autoFillFooter: boolean;

			/**
			 * Specifies whether vertical merge of cells is enabled within **Table Header**, **Details** and **Footer**.\
			 * By default this feature is **enabled**.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.reportItemsFeatures.table.canMergeCellsVertically = false;
			 * ```
			 */
			canMergeCellsVertically: boolean;
		};

		/** Tablix features */
		tablix: {
			/**
			 * Specifies whether Tablix Wizard should hide cross-aggregates functionality.\
			 * By default this feature is **enabled**.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.reportItemsFeatures.tablix.crossAggregates = false;
			 * ```
			 */
			crossAggregates: boolean,

			/**
			 * Specifies whether **Tablix Corner Cell** needs to be auto-filled when a field is dropped to **Tablix Row Group Cell**.\
			 * For example, if **ProductName** field is dropped to **Row Group Cell**, **Product Name** value is set to **Corner Cell**.\
			 * By default this feature is **enabled**.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.reportItemsFeatures.tablix.autoFillCorner = false;
			 * ```
			 */
			autoFillCorner: boolean;

			/**
			 * Specifies whether Tablix Wizard is available for creating/editing Tablix.\
			 * By default this feature is **enabled**.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.reportItemsFeatures.tablix.canUseWizard = false;
			 * ```
			 */
			canUseWizard: boolean;
		};
	};

	/**
	 * When **lockLayout** is enabled, it is only possible to modify properties of existing report items.\
	 * I.e., adding a new report item or deleting of an existing one is not possible as well as other operations that modify report layout structure.\
	 * By default this feature is **disabled**.
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.lockLayout = true;
	 * ```
	 */
	lockLayout: boolean;

	/**
	 * When **restoreUnsavedReport** is **enabled**, the last unsaved report can be restored if browser tab or browser itself gets accidentally closed.\
	 * In case **restoreUnsavedReport** is **disabled**, the aforementioned functionality is not available.\
	 * By default this feature is **enabled**.
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.restoreUnsavedReport = false;
	 * ```
	 */
	restoreUnsavedReport: boolean;

	/**
	 * If **reportInfo.id** is specified, the corresponding report will be opened in Designer when Designer application is rendered.
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.reportInfo.id = 'MyReport.rdlx';
	 * ```
	 */
	reportInfo: {
		/** report id */
		id?: string | null;
	};

	/**
	 * Specifies the expression syntax used in Designer:
	 * 'i11n' - interpolation syntax, 'rdl' - "old" rdl expression syntax
	 * By default the interpolation syntax is used for expressions.
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.expressionSyntax = 'rdl';
	 * ```
	 */
	expressionSyntax: 'i11n' | 'rdl';

	/**
	 * You can plug-in **Report Viewer** component by providing **openViewer** function to **DesignerOptions** object.\
	 * When **openViewer** is passed to **DesignerOptions**, **Preview** button appears in Designer application bar.
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.openViewer = function(options) {
	 * 	// ... create viewer and open report
	 * };
	 * ```
	 *
	 * @param options ViewerOptions object
	 */
	openViewer?: (options: ViewerOptions) => void;

	/** **File View** settings */
	fileView: {
		/**
		 * Specifies whether **File View** tab needs to be shown.\
		 * **File View** tab is **visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.fileView.visible = false;
		 * ```
		 */
		visible: boolean;
	};

	/** **Save** button settings */
	saveButton: {
		/**
		 * Specifies whether **Save** button needs to be shown.\
		 * **Save** button is **not visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.saveButton.visible = true;
		 * ```
		 */
		visible: boolean;
	};

	/** **Save As** button settings */
	saveAsButton: {
		/**
		 * Specifies whether **Save As** button needs to be shown.\
		 * **Save As** button is **not visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.saveAsButton.visible = true;
		 * ```
		 */
		visible: boolean;
	};

	/** **Open** button settings */
	openButton: {
		/**
		 * Specifies whether **Open** button needs to be shown.\
		 * **Open** button is **not visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.openButton.visible = true;
		 * ```
		 */
		visible: boolean;
	};

	/** **Insert** tab settings */
	insertTab: {
		/**
		 * Specifies whether **Insert** tab needs to be shown in Designer application bar.\
		 * **Tool Box** and **Insert** tab are interchangeable.\
		 * **Insert** tab is **not visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.insertTab.visible = true;
		 * ```
		 */
		visible: boolean;
	};

	/** **Report Explorer** settings */
	reportExplorer: {
		/**
		 * Specifies whether **Report Explorer** button needs to be shown.\
		 * **Report Explorer** button is **visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.reportExplorer.visible = false;
		 * ```
		 */
		visible: boolean;
	};

	/** **Group Editor** settings */
	groupEditor: {
		/**
		 * Specifies whether **Group Editor** button needs to be shown.\
		 * **Group Editor** button is **visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.groupEditor.visible = false;
		 * ```
		 */
		visible: boolean;
	};

	/** **Tool Box** settings */
	toolBox: {
		/**
		 * Specifies whether left-side menu **Tool Box** needs to be shown.\
		 * **Tool Box** is **visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.toolBox.visible = false;
		 * ```
		 */
		visible: boolean;
	};

	/** **Properties** tab settings */
	propertiesTab: {
		/**
		 * Specifies whether **Properties** tab needs to be shown.\
		 * **Properties** tab is **visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.propertiesTab.visible = false;
		 * ```
		 */
		visible: boolean;

		/**
		 * Specifies available properties modes.\
		 * The default value is **Both**.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.propertiesTab.mode = 'Basic';
		 * ```
		 */
		mode: 'Basic' | 'Advanced' | 'Both';

		/**
		 * Relevant only when mode is **Both**.\
		 * If **undefined**, the last used properties mode is set.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.propertiesTab.defaultMode = 'Advanced';
		 * ```
		 */
		defaultMode?: 'Basic' | 'Advanced';
	};

	/** **Data** tab settings */
	dataTab: {
		/**
		 * Specifies whether **Data** tab needs to be shown.\
		 * **Data** tab is **visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.dataTab.visible = false;
		 * ```
		 */
		visible: boolean;

		/** **Data Sources** section settings */
		dataSources: {
			/**
			 * Specifies whether **Data Sources** section needs to be shown.\
			 * **Data Sources** section is **visible** by default.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.dataTab.dataSources.visible = false;
			 * ```
			 */
			visible: boolean;

			/**
			 * Specifies whether it is possible to modify (including add/edit/remove) data sources.\
			 * By default this feature is **disabled**.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.dataTab.dataSources.canModify = true;
			 * ```
			 */
			canModify: boolean;

			/** Options for data sources and data source editor */
			options: {
				/** Specifies the list of predefined data providers available in data source editor.\
				 * By default all the predefined providers are present.
				 *
				 * **Example:**
				 * ```javascript
				 * designerOptions.dataTab.dataSources.options.predefinedProviders = ['SQL', 'JSON'];
				 * ```
				 */
				predefinedProviders?: ('SQL' | 'OLEDB' | 'ODBC' | 'JSON' | 'CSV' | 'XML')[],

				/** Specifies the list of OLE DB providers available in data source editor.\
				 * By default 'Microsoft.Jet.OLEDB.4.0', 'SQLOLEDB.1', 'MSDataShape.1', 'MSDASQL.1' are present.
				 *
				 * **Example:**
				 * ```javascript
				 * designerOptions.dataTab.dataSources.options.oleDbProviders = ['Microsoft.Jet.OLEDB.4.0', 'SQLOLEDB.1'];
				 * ```
				 */
				oleDbProviders?: string[],

				/** Specifies the list of custom data providers available in data source editor.\
				 * By default there are no custom data providers present.
				 *
				 * **Example:**
				 * ```javascript
				 * designerOptions.dataTab.dataSources.options.customProviders = [{ key: 'CDP', name: 'Custom Data Provider' }];
				 * ```
				 */
				customProviders?: {
					/**
					* key - data provider identifier\
					* This value is used for **DataSource.ConnectionProperties.DataProvider** property.
					*/
					key: string;

					/**
					* name - data provider label\
					* This value is used as a friendly data provider label in UI.
					*/
					name: string;
				}[],
			},
		};

		/** **Data Sets** section settings */
		dataSets: {
			/**
			 * Specifies whether **Data Sets** section needs to be shown.\
			 * **Data Sets** section is **visible** by default.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.dataTab.dataSets.visible = false;
			 * ```
			 */
			visible: boolean;

			/**
			 * Specifies whether it is possible to modify (including add/edit/remove) data sets.\
			 * By default this feature is **disabled**.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.dataTab.dataSets.canModify = true;
			 * ```
			 */
			canModify: boolean;
		};

		/** **Parameters** section settings */
		parameters: {
			/**
			 * Specifies whether **Parameters** section needs to be shown.\
			 * **Parameters** section is visible by default.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.dataTab.parameters.visible = false;
			 * ```
			 */
			visible: boolean;

			/**
			 * Specifies whether it is possible to modify (including add/edit/remove) report parameters.\
			 * By default this feature is **enabled**.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.dataTab.parameters.canModify = false;
			 * ```
			 */
			canModify: boolean;
		};

		/** **Common Values** section settings */
		commonValues: {
			/**
			 * Specifies whether **Common Values** section needs to be shown.\
			 * **Common Values** section is **visible** by default.
			 *
			 * **Example:**
			 * ```javascript
			 * designerOptions.dataTab.commonValues.visible = false;
			 * ```
			 */
			visible: boolean;
		};
	};

	/** **Units Button** settings */
	unitsButton: {
		/**
		 * Specifies whether **Units Button** button needs to be shown.\
		 * **Units Button** button is **visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.unitsButton = { visible: false };
		 * ```
		 */
		visible: boolean;
	};

	/** **Grid Size** editor settings */
	gridSize: {
		/**
		 * Specifies whether **Grid Size** editor in **Status Bar** needs to be shown.\
		 * **Grid Size** editor is **visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.gridSize.visible = false;
		 * ```
		 */
		visible: boolean;

		/**
		 * Specifies grid size value by designer first start. if units = 'cm', value = 0.5cm by default. Else, value = 0,25in by default
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.gridSize.value = '0.5in';
		 * ```
		 */
		value?: string;
	};

	/** **Show Grid** toggle settings */
	showGrid: {
		/**
		 * Specifies whether **Show Grid** toggle in Status Bar needs to be shown.\
		 * **Show Grid** toggle is **visible** by default.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.showGrid.visible = false;
		 * ```
		 */
		visible: boolean;

		/**
		 * If **Show Grid** toggle is **not visible**, it is possible to specify **Show Grid** value as *true* or *false*.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.showGrid.value = false;
		 * ```
		 */
		value?: boolean;
	};

	/** Specifies snapToGrid option by designer first start. By default snapToGrid = false */
	snapToGrid?: boolean;

	/** Specifies snapToGuides option by designer first start. By default snapToGuides = false */
	snapToGuides?: boolean

	disableFocusTimer: boolean;

	/** Specifies Rulers settings. */
	rulers?: {
		/** Specifies whether **Rulers** needs to be shown by designer first start. */
		visible?: boolean;

		/** Specifies snapStep value. By default snapStep = { in: 0.25, cm: 0.5 } */
		snapStep?: {
			in: number,
			cm: number,
		}
	}

	/** server-related settings */
	server: {
		/** Specifies the base URL for Designer Server API.\
		 * By default its value is 'api'.
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.server.url = 'api/designer';
		 * ```
		 */
		url: string;
	};

	/**
	 * You can implement custom logic for updating document's title when edited report gets updated in Designer.\
	 *
	 * By default `updateTitle` is `undefined` and report's name is used as a document title.
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.updateTitle = ({ reportName, dirty }) => `${reportName}${dirty ? ' - Has Unsaved Changes!' : ''}`;
	 * ```
	 *
	 * @param options ReportTitleInfo object
	 */
	updateTitle?: (info: ReportTitleInfo) => string;

	/**
	 * You can implement custom logic for updating route when edited report `id` gets updated in Designer.\
	 * Report `id` is updated on creating/opening/saving a report - after that `updateRoute` is called.
	 *
	 * By default `updateRoute` is `undefined` so route remains unchanged.
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.updateRoute = function(options) {
	 * 	// ... custom logic for updating route
	 * };
	 * ```
	 *
	 * @param options UpdateRouteOptions object
	 */
	updateRoute?: (options: UpdateRouteOptions) => void;

	/**
	 * Specifies report items on toolBox and their order \
	 *
	 * By default items for cpl report: [ 'textbox', 'checkbox', 'container', 'line', 'shape', 'tableofcontents',
	 *	'image', 'list', 'table', 'tablix', 'chart', 'bullet', 'barcode', 'formattedtext',
	 *	'richtext', 'sparkline', 'subreport', 'bandedlist', 'inputfield' ]
	 *
	 * By default items for fpl report: [ 'textbox', 'checkbox', 'container', 'line', 'shape', 'tableofcontents',
	 *	'image', 'list', 'table', 'tablix', 'chart', 'bullet', 'barcode', 'formattedtext',
	 *	'richtext', 'sparkline', 'subreport', 'overflowplaceholder', 'bandedlist', 'inputfield' ]
	 *
	 * **Example:**
	 * ```javascript
	 * designerOptions.toolBoxContent = {
	 * 		cpl: [ 'checkbox', 'container', 'textbox' ],
	 * 		fpl: [ 'image', 'list', 'table', 'tablix', 'chart', 'bullet', 'barcode', 'formattedtext' ],
	 * };
	 * ```
	 */
	toolBoxContent?: {
		cpl: ToolBoxContentItemType[];
		fpl: ToolBoxContentItemType[];
	};

	/** Specifies additional styles to add to report item styles.
	 *
	 *	 **Example:**
	 * ```javascript
	 * designerOptions.reportStyles = [
	 *				{
	 *					Bullet: [{
	 *							id: 'c8aa4403-83ef-402b-a7da-032063cf625a',
	 *							name: 'additionalBulletStyle1',
	 *							content: {
	 *								ValueColor: 'red',
	 *								LabelFontColor: '=Theme.Colors!Dark1',
	 *								LabelFontFamily: '=Theme.Fonts!MinorFont.Family',
	 *								LabelFontSize: '=Theme.Fonts!MinorFont.Size',
	 *								LabelFontStyle: '=Theme.Fonts!MinorFont.Style',
	 *								TicksLineColor: '=Theme.Colors(1,0)'
	 *							}
	 *						},
	 *					],
	 *					List: [
	 *						{	id: '3d2c3781-4eea-4ac3-8d50-636edd9328d5',
	 *							name: 'additionalListStyle1',
	 *							content: {},
	 *						},
	 *						{	id: '5b7b4e73-22e5-42ed-99c4-62840bdde79d',
	 *							name: 'additionalListStyle2',
	 *							content: {
	 *								BackgroundColor: '=Theme.Colors!Accent1',
	 *								Border: {
	 *									Color: '=Theme.Colors(4,4)',
	 *									Width: '1pt',
	 *									Style: 'Solid',
	 *								}
	 *							}
	 *						}]
	 *				},
	 *				{	ChartPalette: [{
	 *							id: 'c8aa4403-83ef-402b-a7da-0320444',
	 *							name: 'additionalChartPalette',
	 *							content: ['red', '=Theme.Colors!Accent2', '=Theme.Colors!Accent3', '=Theme.Colors!Accent4', '=Theme.Colors!Accent5', '=Theme.Colors!Accent6', '=Theme.Colors(5,4)', '=Theme.Colors(5,5)', '=Theme.Colors(5,6)', '=Theme.Colors(5,7)', '=Theme.Colors(5,8)', '=Theme.Colors(5,9)']
	 *						}]
	 *				},
	 *			];
	 * ```
	 */
	reportStyles?: ReportStyles[];

	/** Reports as a rdlx-json strings, report items from these reports will be used as a templates for creating new items
	 *
	 * imperialTemplates should include reports with units = 'in'
	 * metricTemplates should include reports with units = 'cm'
	 *
	 * Should use fpl-reports to set custom templates for specific fpl-reportItems, for example 'OverflowPlaceHolder'
	 * It is preferable to use cpl-reports to set custom templates for all other report items, as well as for pageHeader and pageFooter.
	 *
	 * For Report you can set ConsumeContainerWhitespace and Page-properties: BottomMargin, LeftMargin, RightMargin, TopMargin,	PageHeight,	PageWidth, ColumnSpacing
	 * For the rest of the report items, all properties are set, including, for example, the number of columns in the table or barcode default symbology
	 *
	 * Note: If in a subsequent report in the array there is the same reportItem as in the previous one, only last template for this reportItem will be set
	 *
	 * Also you can set multiple init templates for some report items. For this, you should add report with more then one report items the same type. Templates with the same names will be replaced.
	 * Use 'TemplateName' custom property of each report item to set a localized name of the template
	 * Use 'AllowWizard' custom property of a chart report item to allow use the chart wizard when this report item is created
	 * For example: ... ,"CustomProperties":[{"Name":"TemplateName","Value":"Doughnut Chart"}, {"Name":"AllowWizard","Value":"true"},...],...
	 *
	 *	 **Example:**
	 * ```javascript
	 *	 designerOptions.customInitTemplates = {
	 *	 	imperialTemplates: ['{"Name":"Report","Width":"5in","Layers":[{"Name":"default"}],"CustomProperties":[{"Name":"DisplayType","Value":"Page"},{"Name":"SizeType","Value":"Default"},{"Name":"PaperOrientation","Value":"Portrait"}],"Page":{"PageWidth":"8.5in","PageHeight":"11in","RightMargin":"1in","LeftMargin":"1in","TopMargin":"1in","BottomMargin":"1in","Columns":1,"ColumnSpacing":"0in"},"Body":{"Height":"0.25in","ReportItems":[{"Type":"textbox","Name":"TextBox1","CustomProperties":[],"CanGrow":true,"KeepTogether":true,"Style":{"PaddingLeft":"2pt","PaddingRight":"2pt","PaddingTop":"2pt","PaddingBottom":"2pt"},"Width":"5in","Height":"0.25in"}]}}'],
	 *	 	metricTemplates: ['{"Name":"Report","Width":"10cm","Layers":[{"Name":"default"}],"CustomProperties":[{"Name":"DisplayType","Value":"Page"},{"Name":"SizeType","Value":"Default"},{"Name":"PaperOrientation","Value":"Portrait"}],"Page":{"PageWidth":"8.5in","PageHeight":"11in","RightMargin":"1in","LeftMargin":"1in","TopMargin":"1in","BottomMargin":"1in","Columns":1,"ColumnSpacing":"0in"},"Body":{"Height":"0.75cm","ReportItems":[{"Type":"textbox","Name":"TextBox1","CustomProperties":[],"CanGrow":true,"KeepTogether":true,"Style":{"PaddingLeft":"2pt","PaddingRight":"2pt","PaddingTop":"2pt","PaddingBottom":"2pt"},"Left":"0cm","Top":"0cm","Width":"10cm","Height":"0.75cm"}]}}'],
	 * 	};
	 * 	 * ```
	 */
	customInitTemplates?: {
		imperialTemplates?: string[];
		metricTemplates?: string[];
	};

	/** Filters for Expression Editor nodes
	 *
	 *	 **Example:**
	 * ```javascript
	 * 	designerOptions.expressionEditorNodesFilter = (key) => {
	 * 		if (key.includes('CommonValues')) return false;
	 * 		if (key.includes('aggregate.aggregateIfWithScope')) return false;
	 * 		return true;
	 * 	}
	 */
	expressionEditorNodesFilter?: (key: string) => boolean;

	documentApiHandlers: {
		/**
		 * async handler, cancels saving process if returned false
		 */
		onBeforeSave?: (info: SaveReportInfo) => Promise<boolean>,

		/**
		 * handler that is called when save is complete
		 */
		onAfterSave?: (info: SaveReportInfo) => void,

		/**
		 * async handler, cancels opening process if returned false
		 */
		onBeforeOpen?: () => Promise<boolean>,

		/**
		 * handler that is called when open is complete
		 */
		onAfterOpen?: () => void,

		/**
		 *  async handler, cancels create process if returned false
		 */
		onBeforeCreate?: () => Promise<boolean>,

		/**
		 * handler that is called when create is complete
		 */
		onAfterCreate?: () => void,

	},

	/** @deprecated use documentApiHandlers.onAfterSave instead */
	onReportSaved?: (reportInfo: SaveReportInfo) => void;

	/**
	* Disable usage of system clipboard. Copy-paste between designer instances will work only in the same browser in the same domain.
	*/
	disableSystemClipboard?: boolean;
};

type ToolBoxContentItemType = 'textbox' | 'checkbox' | 'container' | 'line' | 'shape' | 'tableofcontents' |
'image' | 'list' | 'table' | 'tablix' | 'chart' | 'bullet' | 'barcode' | 'formattedtext' |
'richtext' | 'sparkline' | 'subreport' | 'overflowplaceholder' | 'bandedlist' | 'inputfield';

type Report = Record<string, any>;
type ReportTemplate = Record<string, any>;

type ReportItemStyle<T> = {
	id: string;
	name: string;
	content: T;
};
type BorderStyle = {
	Color?: string;
	Style?: string;
	Width?: string;
};

type CellStyleContent = TextBoxStyleContent & {
	LeftBorder?: BorderStyle;
	TopBorder?: BorderStyle;
	BottomBorder?: BorderStyle;
	RightBorder?: BorderStyle;
	TextAlign?: string;
	VerticalAlign?: string;
};

type TextBoxStyleContent = {
    Color?: string;
    BackgroundColor?: string;
    FontFamily?: string;
    FontSize?: string;
    FontStyle?: string;
    FontWeight?: string;
};
type ContainerStyleContent = {
    BackgroundColor?: string;
    Border?: BorderStyle;
};
type BulletStyleContent = {
    ValueColor?: string;
    TargetLineColor?: string;
    LabelFontColor?: string;
    LabelFontFamily?: string;
    LabelFontSize?: string;
    LabelFontStyle?: string;
    TicksLineColor?: string;
};
type SparklineStyleContent = {
    LineColor?: string;
    FillColor?: string;
    GradientEndColor?: string;
    MarkerColor?: string;
    RangeFillColor?: string;
    RangeGradientEndColor?: string;
};
type TableStyleContent = {
	Header: { Rows: CellStyleContent[] };
	Details: { Rows: CellStyleContent[]; AlternatingExpression: string };
	Footer: { Rows: CellStyleContent[] };
	TableGroups: {
		Styles: {
			Header: { Rows: CellStyleContent[] };
			Footer: { Rows: CellStyleContent[] };
		}[];
	};
	Border?: BorderStyle;
};
type TableOfContentsStyleContent = {
    BackgroundColor?: string;
    Border?: BorderStyle;
	Levels: {
		Color?: string;
		PaddingLeft?: string;
		FontFamily?: string;
		FontSize?: string;
		FontStyle?: string;
		FontWeight?: string;
	};
};

type ChartPaletteContent = string[];

type ReportStyles = {
	Bullet: ReportItemStyle<BulletStyleContent>;
	CheckBox: ReportItemStyle<TextBoxStyleContent>;
	FormattedText: ReportItemStyle<ContainerStyleContent>;
	InputField: ReportItemStyle<TextBoxStyleContent>;
	List: ReportItemStyle<ContainerStyleContent>;
	Rectangle: ReportItemStyle<ContainerStyleContent>;
	RichText: ReportItemStyle<TextBoxStyleContent>;
	Shape: ReportItemStyle<ContainerStyleContent>;
	Sparkline: ReportItemStyle<SparklineStyleContent>;
	Table: ReportItemStyle<TableStyleContent>;
	TableOfContents: ReportItemStyle<TableOfContentsStyleContent>;
	Tablix: ReportItemStyle<TableStyleContent>;
	TextBox: ReportItemStyle<TextBoxStyleContent>;
	ChartPalette: ReportItemStyle<ChartPaletteContent>;
};

export type BarcodeSymbology = 'Ansi39' | 'Ansi39x' | 'BC412' | 'Codabar' | 'Code_11' | 'Code_128_A' | 'Code_128_B' | 'Code_128_C' | 'Code_128auto'
	| 'Code_2_of_5' | 'Code_93' | 'Code25intlv' | 'Code39' | 'Code39x' | 'Code49' | 'Code93x' | 'DataMatrix' | 'EAN_13' | 'EAN_8' | 'EAN128FNC1'
	| 'GS1QRCode' | 'HIBCCode128' | 'HIBCCode39' | 'IATA_2_of_5' | 'IntelligentMail' | 'IntelligentMailPackage' | 'ISBN' | 'ISMN' | 'ISSN'
	| 'ITF14' | 'JapanesePostal' | 'Matrix_2_of_5' | 'MaxiCode' | 'MicroPDF417' | 'MicroQRCode' | 'MSI' | 'Pdf417' | 'Pharmacode' | 'Plessey'
	| 'PostNet' | 'PZN' | 'QRCode' | 'RM4SCC' | 'RSS14' | 'RSS14Stacked' | 'RSS14StackedOmnidirectional' | 'RSS14Truncated' | 'RSSExpanded'
	| 'RSSExpandedStacked' | 'RSSLimited' | 'SSCC_18' | 'Telepen' | 'UCCEAN128' | 'UPC_A' | 'UPC_E0' | 'UPC_E1';

export type ViewerOptions = {
	/** element id where to render viewer */
	element: string;

	/** locale passed by Designer */
	locale: 'en' | 'ja' | 'zh';

	/** application title passed by Designer */
	applicationTitle: string;

	/** information on the report to-be-previewed */
	reportInfo: {
		/** report id */
		id: string;

		/** Report content in JSON format that can be useful for report viewers with in-browser rendering. */
		content: Report;

		/** report name */
		name: string;

		/** Specifies whether the report to-be-previewed is an existing report saved on server side. */
		isTemporary: boolean;
	};
};

export type ReportTitleInfo = {
	/** Report name */
	reportName: string;
	/** Indicates whether the report has unsaved changes or not. */
	dirty: boolean;
};

export type UpdateRouteOptions = {
	/** report id */
	id: string;
};

export type AboutInfo = {
	/** Application title replaces **ActiveReports Web Designer** in all the places where it is used by default. */
	applicationTitle: string;

	/** Compact application title is used in places where there is not enough space for a full title. */
	applicationTitleCompact: string;

	/** application version */
	applicationVersion: string;

	/** product title - can be overwritten */
	productTitle?: string;

	/** product version - can be overwritten */
	productVersion?: string;
};

export type HelpInfo = {
	/** help page title */
	title?: string;

	/** help page URL */
	link: string;
};

//
export type CurrentReportInfo = {
	/**
	 * report id
	 *
	 * If an existing report is edited, **id** is defined.\
	 * Otherwise, if a new report is edited, **id** is **null**.
	 */
	id: string | null;

	/** report name */
	name: string;
};

export type TemplateInfo = {
	/** report template name */
	name: string;

	/** report template id */
	id?: string;

	/** Report template content in JSON format that can be useful in case you would like to create a non-empty new report. */
	content?: ReportTemplate;
};

export type CreateReportOptions = {
	/** template info - if it is specified for report creation, either **templateInfo.id** or **templateinfo.content** needs to be defined */
	templateInfo?: TemplateInfo;

	/** data sets infos */
	dataSetsInfo?: {
		/** data set id */
		id: string;

		/** data set name */
		name: string;
	}[];

	/**
	 * Name for new report, if not specified default 'Untitled' name will be used
	 */
	name?: string;

	/**
	 * Which type of report to create
	 */
	reportType?: 'FPL';

};

export type CreateReportInfo = {
	templateInfo?: TemplateInfo;

	name: string;
	/**
	 * undefined in onBeforeCreate handler
	 * defined in onAfterCreate handler
	 */
	success?: boolean;
};

export type SaveReportInfo = {
	/**
	 * If an existing report is to be overwritten on saving,
	 * the correct id should be specified explicitly.
	 */
	id?: string;

	/**
	 * The correct name needs to be always specified explicitly.
	 */
	name: string;

	/**
	 * Indicates that a new report is being saved for the first time
	 */
	isFirstSave: boolean;

	/**
	 * undefined in onBefore**** handlers
	 * should be defined in onAfter****
	 */
	success?: boolean;
};

export type OpenReportInfo = {
	name: string;
	id: string;
	/**
	 * undefined in onBefore**** handlers
	 * should be defined in onAfter****
	 */
	success?: boolean;
};


/**
 * Legacy API
 * Type of **GrapeCity.ActiveReports.WebDesigner** object exported by **web-designer.js** module.
 */
export type DesignerApi = {
	/**
	 * Creates the default **DesignerOptions** object to be passed to **renderApplication()** function.\
	 * This object includes both required and optional Designer settings.
	 *
	 * **Example:**
	 * ```javascript
	 * var designerOptions = GrapeCity.ActiveReports.WebDesigner.createDesignerOptions();
	 * ```
	 */
	createDesignerOptions: () => DesignerOptions;

	/**
	 * Renders **Web Designer** to **<div>** element with id **designerElementId** using the specified **DesignerOptions** object.
	 *
	 * **Example:**
	 * ```javascript
	 * GrapeCity.ActiveReports.WebDesigner.renderApplication('designer-id', designerOptions);
	 * ```
	 *
	 * @param designerElementId string
	 * @param designerOptions DesignerOptions object
	 */
	renderApplication: (designerElementId: string, designerOptions: DesignerOptions) => Promise<any>;

	/**
	 * Returns focus to Designer. Focus may be lost when plug-in components are opened/closed.\
	 * Returning focus is essential to continue using Designer hotkeys like Ctrl+Z (undo), Ctrl+Y (redo), etc.
	 *
	 * **Example:**
	 * ```javascript
	 * GrapeCity.ActiveReports.WebDesigner.focus();
	 * ```
	 */
	focus: () => void;

	/**
	 * Returns **AboutInfo** object containing information about application name/version and product title/version.
	 *
	 * **Example:**
	 * ```javascript
	 * var aboutInfo = GrapeCity.ActiveReports.WebDesigner.getAboutInfo();
	 * ```
	 */
	getAboutInfo: () => AboutInfo;


	/**
	 * Returns **HelpInfo[]** containing title/link pairs of Designer-related Help pages.
	 *
	 * **Example:**
	 * ```javascript
	 * var helpInfos = GrapeCity.ActiveReports.WebDesigner.getHelpInfos();
	 * ```
	 */
	getHelpInfos: () => HelpInfo[];

	/**
	 * This object includes functions allowing to create/open/save report, etc.
	 */
	api: ReportingApi;
};


export type ReportingApi = {
	/**
	 * Indicates whether report has unsaved changes.
	 *
	 * **Example:**
	 * ```javascript
	 * var hasUnsavedChanges = GrapeCity.ActiveReports.WebDesigner.api.isReportDirty();
	 * if (hasUnsavedChanges) console.log('Currently edited report has unsaved changes.');
	 * ```
	 */
	isReportDirty: () => boolean;

	/**
	 * Returns information about the currently edited report.
	 *
	 * **Example:**
	 * ```javascript
	 * var reportInfo = GrapeCity.ActiveReports.WebDesigner.api.getReportInfo();
	 * console.log(`Report "${reportInfo.name}" is currently edited.`);
	 * ```
	 */
	getReportInfo: () => CurrentReportInfo;

	/**
	 * Creates a new report to be edited in Designer using the specified **CreateReportOptions** object.
	 *
	 * **Example:**
	 * ```javascript
	 * GrapeCity.ActiveReports.WebDesigner.api.createReport({
	 * 	onFinish: () => {
	 * 		console.log('An empty RDL report is created.');
	 * 	},
	 * });
	 * ```
	 *
	 * @param options CreateReportOptions object
	 */
	createReport: (options: LegacyCreateReportOptions) => void;

	/**
	 * Opens anOpens an existing report to be edited in Designer using the specified **OpenReportOptions** object.
	 *
	 * **Example:**
	 * ```javascript
	 * GrapeCity.ActiveReports.WebDesigner.api.openReport({
	 * 	reportInfo: {
	 * 		id: 'MyReport.rdlx',
	 * 		name: 'MyReport.rdlx',
	 * 	},
	 * 	onFinish: () => {
	 * 		console.log('An existing report "MyReport.rdlx" is opened.');
	 * 	},
	 * });
	 * ```
	 *
	 * @param options OpenReportOptions object
	 */
	openReport: (options: LegacyOpenReportOptions) => void;

	/**
	 * Saves the report currently edited in Designer using the specified **SaveReportOptions** object.
	 *
	 * **Example:**
	 * ```javascript
	 * GrapeCity.ActiveReports.WebDesigner.api.saveReport({
	 * 	reportInfo: {
	 * 		name: 'MyReport.rdlx',
	 * 	},
	 * 	onFinish: () => {
	 * 		console.log('A new report "MyReport.rdlx" is saved.');
	 * 	},
	 * });
	 * ```
	 *
	 * @param options SaveReportOptions object
	 */
	saveReport: (options: LegacySaveReportOptions) => void;
};


export type LegacyCreateReportOptions = {
	/** template info - if it is specified for report creation, either **id** or **content** needs to be defined */
	templateInfo?: {
		/** report template name */
		name: string;

		/** report template id */
		id?: string;

		/** Report template content in JSON format that can be useful in case you would like to create a non-empty new report. */
		content?: ReportTemplate;
	};

	/** data sets infos */
	dataSets?: {
		/** data set id */
		id: string;

		/** data set name */
		name: string;
	}[];

	/** callback on starting to create a report */
	onStart?: () => void;

	/** callback on finishing to create a report */
	onFinish?: () => void;
};

export type LegacyOpenReportOptions = {
	reportInfo: {
		/** report name */
		name: string;

		/** report id */
		id?: string;

		/** report content in JSON format */
		content?: Report;
	};

	/** callback on starting to open a report */
	onStart?: () => void;

	/** callback on finishing to open a report */
	onFinish?: () => void;
};

export type LegacySaveReportOptions = {
	/** report info */
	reportInfo: {
		/**
		 * report id
		 *
		 * If an existing report is to be overwritten on saving, the correct **id** should be specified explicitly.
		 */
		id?: string;

		/** The correct name needs to be always specified explicitly. */
		name: string;
	};

	/** callback on starting to save a report */
	onStart?: () => void;

	/** callback on finishing to save a report */
	onFinish?: () => void;
};

