/* eslint-disable max-len */

/**
 * The main object exported by **WebDesigner** **ESM** module.
 */
export const arWebDesigner: {
	/**
	 * Renders **Web Designer** to **<div>** element with given **selector** using the specified **DesignerSettings** object.
	 *
	 * **Example:**
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 * 	rpx: { enabled: true },
	 * 	appBar: { openButton: { visible: true } }
	 * });
	 * ```
	 *
	 * @param selector Designer container selector
	 * @param settings DesignerSettings object
	 * @returns DesignerAPI of this instance
	 */
	create: (selector: string, settings: DesignerSettings) => Promise<DesignerAPI>;

	/**
	 * Returns DesignerAPI of previously created instance of **WebDesigner**
	 *
	 * **Example:**
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * const designer = arWebDesigner.apiOf('ar-web-designer');
	 * ```
	 * **
	 */
	apiOf: (instanceId: string) => DesignerAPI;

	/**
	 * Adds language resources for all instances of **WebDesigner**
	 *
	 * **Example:**
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.addLanguage('en', [
	 *    {
	 *        "ns": "app",
	 *        "lng": "en",
	 *        "resources": {
	 *            "about": {
	 *                "textAppTitleCompact": "",
	 *            },
	 *        }
	 *    },
	 *]);
	 * ```
	 * **
	 */
	addLanguage: (lng: string, resources: ResourceBundle[]) => void;

	/**
	 * Destroys Designer Application
	 *
	 * **Example:**
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#container-1', { ...settings, instanceId: 'instance-1' });
	 * arWebDesigner.destroy('#container-1', 'instance-1');
	 * ```
	 * @param selector Designer container selector
	 * @param instanceId Optional parameter. Use only if Designer was created using DesignerSettings.instanceId.
	 */
	destroy: (selector: string, instanceId?: string) => void;
};


/**
 * Type of **GrapeCity.ActiveReports.Designer** object exported by **web-designer.js** module.
 */

type GlobalDesignerAPI = {
	/**
	 * Renders **Web Designer** to **<div>** element with given **selector** using the specified **DesignerSettings** object.
	 *
	 * **Example:**
	 * ```javascript
	 * GrapeCity.ActiveReports.Designer.create('#designer-id', designerSettings);
	 * ```
	 *
	 * @param selector Designer container selector
	 * @param settings DesignerSettings object
	 * @returns DesignerAPI of this instance
	 */
	create: (selector: string, settings: DesignerSettings) => Promise<DesignerAPI>;

	/**
	 * Returns DesignerAPI of previously created instance of **WebDesigner**
	 *
	 * **Example:**
	 * const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * **
	 */
	apiOf: (instanceId: string) => DesignerAPI | undefined;

	/**
	 * Adds language resources for all instances of **WebDesigner**
	 *
	 * **Example:**
	 *         GrapeCity.ActiveReports.Designer.addLanguage('en', [
	 *       {
	 *           "ns": "app",
	 *           "lng": "en",
	 *           "resources": {
	 *               "about": {
	 *                   "textAppTitleCompact": "",
	 *               },
	 *           }
	 *       },
	 *   ]);
	 * **
	 */
	addLanguage: (lng: string, resources: ResourceBundle[]) => void;

	/**
	 * Destroys Designer Application
	 *
	 * **Example:**
	 * ```javascript
	 * // with instanceId
	 * GrapeCity.ActiveReports.Designer.create('#container-1', { ...settings, instanceId: 'instance-1' });
	 * GrapeCity.ActiveReports.Designer.destroy('#container-1', 'instance-1');
	 *
	 * // without instanceId
	 * GrapeCity.ActiveReports.Designer.create('#container-2', settings);
	 * GrapeCity.ActiveReports.Designer.destroy('#container-2');
	 * ```
	 * @param selector Designer container selector
	 * @param instanceId Optional parameter. Use only if Designer was created using DesignerSettings.instanceId.
	 */
	destroy: (selector: string, instanceId: string) => void;
};

type ResourceBundle = {

	/** Language */
	lng: string;

	/** Namespace */
	ns: string;

	/** Localization resources */
	resources: Record<string, any>;
};

/**
 * Type of object returned by functions from **GlobalDesignerAPI**
 */
type DesignerAPI = {

	/** Application-related APIs */
	app: {

		/** Contains documentation links and application info */
		about: {

			/** Designer-related documentation links
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* rpx: { enabled: true },
			* appBar: { openButton: { visible: true } }
			* }).then((designer) => {
			* designer.app.about.help.general.text = 'help text';
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer) => {
			* designer.app.about.help.general.text = 'help text';
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* rpx: { enabled: true },
			* appBar: { openButton: { visible: true } }
			* }).then((designer: DesignerAPI) => {
			* designer.app.about.help.general.text = 'help text';
			* });
			* ```
			*/
			help: {
				/** General documentation
				*
				* @example
				* ```javascript
				* // ESM usage
				* import { arWebDesigner } from './web-designer.js';
				* arWebDesigner.create('#ar-web-designer', {
				* 	rpx: { enabled: true },
				* 	appBar: { openButton: { visible: true } }
				* }).then((designer) => {
				* 	designer.app.about.help.general.text = 'help text';
				* 	designer.app.about.help.general.url = 'http://myurl';
				* });
				* ```
				* @example
				* ```javascript
				* // UMD usage
				* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
				* 	rpx: { enabled: true },
				* 	appBar: { openButton: { visible: true } }
				* }).then((designer) => {
				* 	designer.app.about.help.general.text = 'help text';
				* 	designer.app.about.help.general.url = 'http://myurl';
				* });
				* ```
				* @example
				* ```typescript
				* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
				* 	rpx: { enabled: true },
				* 	appBar: { openButton: { visible: true } }
				* }).then((designer: DesignerAPI) => {
				* 	designer.app.about.help.general.text = 'help text';
				* 	designer.app.about.help.general.url = 'http://myurl';
				* });
				* ```
				*/
				general: { text: string; url: string };
				/** Report items transformation info */
				transformation: { text?: string; url: string };
			};

			/** Application title
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer) => {
			* 	designer.app.about.applicationTitle = 'Title text';
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer) => {
			* 	designer.app.about.applicationTitle = 'Title text';
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer: DesignerAPI) => {
			* 	designer.app.about.applicationTitle = 'Title text';
			* });
			* ```
			*/
			applicationTitle: string;
			/** A compact version of the application title
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer) => {
			* 	designer.app.about.applicationTitleCompact = 'Example text';
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer) => {
			* 	designer.app.about.applicationTitleCompact = 'Example text';
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer: DesignerAPI) => {
			* 	designer.app.about.applicationTitleCompact = 'Example text';
			* });
			* ```
			*/
			applicationTitleCompact: string;

			/** Application version
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer) => {
			* 	designer.app.about.coreVersion = '1.2.3';
			*	designer.app.about.applicationVersion = '3.4.5';
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer) => {
			* 	designer.app.about.coreVersion = '1.2.3';
			*	designer.app.about.applicationVersion = '3.4.5';
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer: DesignerAPI) => {
			* 	designer.app.about.coreVersion = '1.2.3';
			*	designer.app.about.applicationVersion = '3.4.5';
			* });
			* ```
			*/
			applicationVersion: string;
			/** Designer Core version an application is based on
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer) => {
			* 	designer.app.about.coreVersion = '1.2.3';
			*	designer.app.about.applicationVersion = '3.4.5';
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer) => {
			* 	designer.app.about.coreVersion = '1.2.3';
			*	designer.app.about.applicationVersion = '3.4.5';
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	rpx: { enabled: true },
			* 	appBar: { openButton: { visible: true } }
			* }).then((designer: DesignerAPI) => {
			* 	designer.app.about.coreVersion = '1.2.3';
			*	designer.app.about.applicationVersion = '3.4.5';
			* });
			* ```
			*/
			coreVersion: string;
		}

		/**
		 * Returns focus to Designer. Focus may be lost when plug-in components are opened/closed.\
		 * Returning focus is essential to continue using Designer hotkeys like Ctrl+Z (undo), Ctrl+Y (redo), etc.
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 *		rpx: { enabled: true },
		 *		appBar: { openButton: { visible: true } }
		 *	}).then((designer) => {
		 *			designer.app.focus();
		 *		 });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *		rpx: { enabled: true },
		 *		appBar: { openButton: { visible: true } }
		 *	}).then((designer) => {
		 *			designer.app.focus();
		 *		 });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *		rpx: { enabled: true },
		 *		appBar: { openButton: { visible: true } }
		 *	}).then((designer: DesignerAPI) => {
		 *			designer.app.focus();
		 *		 });
		 * ```
		 */
		focus: () => void;

		/**
		 * Information about the availability of common actions with the report and selected items
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * const designer = arWebDesigner.apiOf('ar-web-designer');
		 * if (designer.app.editor.canUndo) designer.app.editor.undo();
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
		 * if (designer.app.editor.canUndo) designer.app.editor.undo();
		 * ```
		 * @example
		 * ```typescript
		 *	const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
		 *	if (designer.app.editor.canUndo) designer.app.editor.undo();
		 * ```
		 */
		editor: {
			/** Flag when the can undo
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canUndo) designer.app.editor.undo();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canUndo) designer.app.editor.undo();
			* ```
			* @example
			* ```typescript
			*	const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			*	if (designer.app.editor.canUndo) designer.app.editor.undo();
			* ```
			*/
			canUndo: () => boolean;

			/** Flag when the can redo
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canRedo) designer.app.editor.redo();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canRedo) designer.app.editor.redo();
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canRedo) designer.app.editor.redo();
			* ```
			*/
			canRedo: () => boolean;

			/** Flag when you can cut the selected item/items
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canCut) designer.app.editor.cut();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canCut) designer.app.editor.cut();
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canCut) designer.app.editor.cut();
			* ```
			*/
			canCut: () => boolean;

			/** Flag when you can paste the selected item/items
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canPaste) designer.app.editor.paste();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canPaste) designer.app.editor.paste();
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canPaste) designer.app.editor.paste();
			* ```
			*/
			canPaste: () => boolean;

			/** Flag when you can copy the selected item/items
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canCopy) designer.app.editor.copy();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canCopy) designer.app.editor.copy();
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canCopy) designer.app.editor.copy();
			* ```
			*/
			canCopy: () => boolean;

			/** Flag when you can delete the selected item/items
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canDelete) designer.app.editor.delete();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canDelete) designer.app.editor.delete();
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canDelete) designer.app.editor.delete();
			* ```
			*/
			canDelete: () => boolean;

			/** Action undo
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canUndo) designer.app.editor.undo();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canUndo) designer.app.editor.undo();
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canUndo) designer.app.editor.undo();
			* ```
			*/
			undo: () => void;

			/** Action redo
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canRedo) designer.app.editor.redo();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canRedo) designer.app.editor.redo();
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canRedo) designer.app.editor.redo();
			* ```
			*/
			redo: () => void;

			/** Action cut
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canCut) designer.app.editor.cut();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canCut) designer.app.editor.cut();
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canCut) designer.app.editor.cut();
			* ```
			*/
			cut: () => void;

			/** Action copy
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canCopy) designer.app.editor.copy();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canCopy) designer.app.editor.copy();
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canCopy) designer.app.editor.copy();
			* ```
			*/
			copy: () => void;

			/** Action paste
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canPaste) designer.app.editor.paste();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canPaste) designer.app.editor.paste();
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canPaste) designer.app.editor.paste();
			* ```
			*/
			paste: () => void;

			/** Action delete
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* if (designer.app.editor.canDelete) designer.app.editor.delete();
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canDelete) designer.app.editor.delete();
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* if (designer.app.editor.canDelete) designer.app.editor.delete();
			* ```
			*/
			delete: () => void;
		};

		/** Contains access to the menu and sidebar panels */
		panels: {

			/**	Menu API *
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* designer.app.panels.menu.open('document-explorer');
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* designer.app.panels.menu.open('document-explorer');
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* designer.app.panels.menu.open('document-explorer');
			* ```
			*/
			menu: {
				open: (id: string) => void;
				pin: () => void;
				close: () => void;
			};

			/**	Sidebar API *
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* const designer = arWebDesigner.apiOf('ar-web-designer');
			* ddesigner.app.panels.sidebar.open('propsTab');
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* designer.app.panels.sidebar.open('propsTab');
			* ```
			* @example
			* ```typescript
			* const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
			* designer.app.panels.sidebar.open('propsTab');
			* ```
			*/
			sidebar: {
				/**	Open sidebar panel by name*/
				open: (id: string) => void;
				close: () => void;
			};
		};
	};

	/**
	 * This object includes functions allowing to create/open/save report, etc.
	 */
	documents: DocumentsAPI;


	/**
	 * Allows to utilize built-in notifications system
	 */
	notifications: NotificationsAPI;
};

type DocumentsAPI = {
	/**
	 * Indicates whether report has unsaved changes.
	 *
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * const designer = arWebDesigner.apiOf('ar-web-designer');
	 * const val = designer.documents.hasUnsavedChanges();
	 * if (val) console.log('Currently edited report has unsaved changes.');
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * const val = designer.documents.hasUnsavedChanges();
	 * if (val) console.log('Currently edited report has unsaved changes.');
	 * ```
	 * @example
	 * ```typescript
	 * const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * const val = designer.documents.hasUnsavedChanges();
	 * if (val) console.log('Currently edited report has unsaved changes.');
	 * ```
	 */
	hasUnsavedChanges: () => boolean;

	/**
	 * Indicates whether report was saved before at least once
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * const designer = arWebDesigner.apiOf('ar-web-designer');
	 * const val = designer.documents.isNew();
	 * if (val) console.log('New document');
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * const val = designer.documents.isNew();
	 * if (val) console.log('New document');
	 * ```
	 * @example
	 * ```typescript
	 * const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * const val = designer.documents.isNew();
	 * if (val) console.log('New document');
	 * ```
	 */
	isNew: () => boolean;

	/**
	 * Returns information about the currently edited report.
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * const designer = arWebDesigner.apiOf('ar-web-designer');
	 * var reportInfo = designer.documents.info();
	 * console.log(`Report "${reportInfo.name}" is currently edited.`);
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * var reportInfo = designer.documents.info();
	 * console.log(`Report "${reportInfo.name}" is currently edited.`);
	 * ```
	 * @example
	 * ```typescript
	 * const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * var reportInfo = designer.documents.info();
	 * console.log(`Report "${reportInfo.name}" is currently edited.`);
	 * ```
	 */
	info: () => CurrentDocumentInfo;

	/**
	 * Creates a new report to be edited in Designer using the specified **CreateReportOptions** object.
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * const designer = arWebDesigner.apiOf('ar-web-designer');
	 * var reportInfo = designer.documents.create().then(function() {
	 * 	console.log('An empty RDL report is created.');
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * var reportInfo = designer.documents.create().then(function() {
	 * 	console.log('An empty RDL report is created.');
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * var reportInfo = designer.documents.create().then(() => {
	 * 		console.log('An empty RDL report is created.');
	 * });
	 * **
	 * @param options CreateReportOptions object
	 */
	create: (options?: CreateDocumentOptions) => Promise<CreateDocumentInfo>;

	/**
	 * Shows open report dialog
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * var api = arWebDesigner.apiOf('designer-id');
	 * api.documents.open();
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.open();
	 * ```
	 * @example
	 * ```typescript
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.open();
	 * ```
	 */
	open: () => void;

	/**
	 * Opens an existing report to be edited in Designer with specified id.
	 * Optionally you can pass name and content, else it will be loaded from server.
	 * @param options OpenReportOptions object
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * var api = arWebDesigner.apiOf('designer-id');
	 * api.documents.openById('MyReport.rdlx', { platform: 'rdlx', type: 'report', subType: 'msl'}).then(() => {
	 *   console.log('An existing report "MyReport.rdlx" is opened.');
	 * });
	 * var reportContent = { Width: '6.5in', ReportSections: [{ Type: 'Continuous' as any, Name: 'ContinuousSection1', Body: { ReportItems: [ {Type: 'textbox', Name: 'TextBox1', Width: '5in', Height: '1in' } ] }}]};
	 * api.documents.openById('NewReport.rdlx', { platform: 'rdlx', type: 'report', subType: 'msl'}, 'NewReport', reportContent).then(() => {
	 *   console.log('New report with one textbox created and opened.');
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.openById('MyReport.rdlx', { platform: 'rdlx', type: 'report', subType: 'msl'}).then(() => {
	 *   console.log('An existing report "MyReport.rdlx" is opened.');
	 * });
	 * var reportContent = { Width: '6.5in', ReportSections: [{ Type: 'Continuous' as any, Name: 'ContinuousSection1', Body: { ReportItems: [ {Type: 'textbox', Name: 'TextBox1', Width: '5in', Height: '1in' } ] }}]};
	 * api.documents.openById('NewReport.rdlx', { platform: 'rdlx', type: 'report', subType: 'msl'}, 'NewReport', reportContent).then(() => {
	 *   console.log('New report with one textbox created and opened.');
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * const api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.openById('MyReport.rdlx', { platform: 'rdlx', type: 'report', subType: 'msl'}).then(() => {
	 *   console.log('An existing report "MyReport.rdlx" is opened.');
	 * });
	 * const reportContent = { Width: '6.5in', ReportSections: [{ Type: 'Continuous' as any, Name: 'ContinuousSection1', Body: { ReportItems: [ {Type: 'textbox', Name: 'TextBox1', Width: '5in', Height: '1in' } ] }}]};
	 * api.documents.openById('NewReport.rdlx', { platform: 'rdlx', type: 'report', subType: 'msl'}, 'NewReport', reportContent).then(() => {
	 *   console.log('New report with one textbox created and opened.');
	 * });
	 * ```
	 */
	openById: (id: string, type: SupportedDocumentType, name?: string, content?: any) => Promise<OpenDocumentInfo>;

	/**
	 *  Saves the report currently edited in Designer, if report is new, then "Save As" dialog will be opened.
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * var api = arWebDesigner.apiOf('designer-id');
	 * api.documents.save();
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.save();
	 * ```
	 * @example
	 * ```typescript
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.save();
	 * ```
	 */
	save: () => void;

	/**
	 * Opens "Save As" dialog
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * var api = arWebDesigner.apiOf('designer-id');
	 * api.documents.save();
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.save();
	 * ```
	 * @example
	 * ```typescript
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.saveAs();
	 * ```
	 */
	saveAs: () => void;

	/**
	 * Saves the report currently edited in Designer using the specified **id**.
	 * @param options SaveReportOptions object
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * var api = arWebDesigner.apiOf('designer-id');
	 * api.documents.saveById('MyReport.rdlx');
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.saveById('MyReport.rdlx');
	 * ```
	 * @example
	 * ```typescript
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.saveById('MyReport.rdlx');
	 * ```
	 */
	saveById: (id?: string, name?: string) => Promise<SaveDocumentInfo>;

	/**
	 * Saves the report currently edited in Designer using the specified **name**.
	 * @param options SaveReportOptions object
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * var api = arWebDesigner.apiOf('designer-id');
	 * api.documents.saveByName('MyReport.rdlx')
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.saveByName('MyReport.rdlx')
	 * ```
	 * @example
	 * ```typescript
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('designer-id');
	 * api.documents.saveByName('MyReport.rdlx')
	 * ```
	 */
	saveByName: (name: string) => Promise<SaveDocumentInfo>;

};

type RpxReportDocumentType = {
	platform: 'rpx';
	type: 'report';
};

type RdlxFplReportDocumentType = {
	platform: 'rdlx';
	type: 'report';
	subType: 'fpl';
};

type RdlxMslReportDocumentType = {
	platform: 'rdlx';
	type: 'report'
	subType: 'msl';
};

type RdlxMslDashboardDocumentType = {
	platform: 'rdlx';
	type: 'dashboard';
	subType: 'msl';
};

type RdlxMasterMultiReportDocumentType = {
    platform: 'rdlx';
    type: 'master';
    subType: 'msl';
};

type RdlxDocumentType = RdlxFplReportDocumentType | RdlxMslReportDocumentType | RdlxMslDashboardDocumentType | RdlxMasterMultiReportDocumentType;

/**
 * Type of documents supported by the AR Web Designer
 */
type SupportedDocumentType = RpxReportDocumentType | RdlxDocumentType;

type NotificationsAPI = {
	/**
	 * Sends a notification of specified level, caption and content
	 * @param level Notification level. Determines color and icons used for the notifications
	 * @param caption Notification caption. Shown by default when notification pops up, then used as a title in Notification Details view
	 * @param content Notification content. Only visible when Notification Details are open
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * }).then((api) => {
	 *		api.notifications.send('info', 'My information');
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * }).then((api) => {
	 *		api.notifications.send('info', 'My information');
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * var designer: DesignerAPI = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *      storeUnsavedReport: false
	 *  }).then((api: DesignerAPI) => {
	 *      api.notifications.send('info', 'My information');
	 * });
	 * ```
	 */
	send: (level: 'info' | 'warning' | 'error', caption: string, content?: string) => void;

	/**
	 * Sends a general notification. Can be used to notify when any user-initiated action is complete
	 * @param caption Notification caption
	 * @param text Optional notification content
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * }).then((api) => {
	 *		api.notifications.info('Notification');
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * }).then((api) => {
	 *		api.notifications.info('Notification');
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * var designer: DesignerAPI = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *      storeUnsavedReport: false
	 *  }).then((api: DesignerAPI) => {
	 *      api.notifications.info('Notification');
	 *		});
	 */
	info: (caption: string, text?: string) => void;

	/**
	 * Sends an error notification
	 * @param caption Error caption
	 * @param errorText Optional error details
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * }).then((api) => {
	 *		api.notifications.error("Application error");
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * }).then((api) => {
	 *		api.notifications.error("Application error");
	 * });
	 * ```
	 * @example
	 * ```typescript
	 *	var designer: DesignerAPI = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *       storeUnsavedReport: false
	 *   }).then((api: DesignerAPI) => {
	 *           api.notifications.error("Application error");
	 *  });
	 * ```
	 */
	error: (caption: string, errorText?: string) => void;

	/**
	 * Sends a warning notification
	 * @param caption Warning caption
	 * @param warningText Optional warning details
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * }).then((api) => {
	 *		api.notifications.warning('Warning');
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * }).then((api) => {
	 *		api.notifications.warning('Warning');
	 * });
	 * ```
	 * @example
	 * ```typescript
	 *	var designer: DesignerAPI = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *       storeUnsavedReport: false
	 *   }).then((api: DesignerAPI) => {
	 *       api.notifications.warning('Warning');
	 *  });
	 * ```
	 */
	warning: (caption: string, warningText?: string) => void;

	/**
	 * Dismisses all the notifications
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * }).then((api) => {
	 *		api.notifications.dismissAll();
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * }).then((api) => {
	 *		api.notifications.dismissAll();
	 * });
	 * ```
	 * @example
	 * ```typescript
	 *	const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 *	designer.notifications.dismissAll();
	 * ```
	 */
	dismissAll: () => void;
};

type Font = { label: string; value: string };
type FontHeader = { header: string };
type Color = { R: number; G: number; B: number; A?: number };

type MenuCssIcon = {
	type: 'css';
	class: string;
};

type MenuIcon = MenuCssIcon;

type DesignerSettings = {
	/**
	 * Unique identifier for the Designer instance. Required if there are multiple instances on the same page
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * var api = arWebDesigner.apiOf('ar-web-designer');
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * ```
	 * @example
	 * ```typescript
	 * const api = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * ```
	 * @default 'ar-web-designer'
	 */
	instanceId: string;

	/**
	 * Specifies language to use for the Designer.\
	 * If **language** is not specified, browser preferences are used
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		language: 'ja'
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		language: 'ja'
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		language: 'ja'
	 * });
	 * ```
	 * @default 'en'
	 */
	language: string;

	/**
	 * Specifies the list of fonts displayed in **Font** property editors all over Designer.\
	 * Supports plain strings, label-value pairs, headers and splitters
	 *
	 * If not specified, the default list of fonts is used:
	 *	'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Geneva', 'Georgia', 'Helvetica',
	 *	'Impact', 'Lucida Console', 'Meiryo', 'Meiryo UI', 'MingLiU', 'MingLiU-ExtB', 'MS Gothic', 'MS Mincho',
	 *	'MS PGothic', 'MS PMincho', 'MS Song', 'MS UI Gothic', 'NSimSun', 'Osaka', 'PMingLiU', 'PMingLiU-ExtB',
	 *	'SimSun', 'SimSun-ExtB', 'Song', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana', 'Yu Gothic'.
	 *
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		fonts: [{ header: 'Questionable Choice' }, { label: 'Pretty Font', value: 'Comic Sans MS' }, { header: '' }, 'Arial', 'Courier New', 'Times New Roman']
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		fonts: [{ header: 'Questionable Choice' }, { label: 'Pretty Font', value: 'Comic Sans MS' }, { header: '' }, 'Arial', 'Courier New', 'Times New Roman']
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		fonts: [{ header: 'Questionable Choice' }, { label: 'Pretty Font', value: 'Comic Sans MS' }, { header: '' }, 'Arial', 'Courier New', 'Times New Roman']
	 * });
	 * ```
	 */
	fonts: (string | Font | FontHeader)[];

	/**
	 * Configures various theme-related settings.
	 */
	themes: {
		/**
		 * The default theme to be applied.
		 *
		 * @default "default"
		 */
		default: string;

		/**
		 * An array of available themes that can be picked by the user.
		 * You can use either built-in theme names, or pass the theme object.
		 * Theme object can be created using GrapeCity.ActiveReports.DesignerThemes.create()
		 *
		 * @default ["default", "activeReports", "activeReportsDark", "defaultDark", "darkOled", "highContrast", "highContrastDark"]
		 */
		list: (string | Record<string, string | Color | boolean>)[];

		/**
		 * Indicates whether designer should automatically detect and switch to a dark theme
		 * based on system settings.
		 *
		 * @default false
		 */
		detectDarkTheme: boolean;

		/**
		 * Controls Theme Picker behavior
		 */
		picker: {
			/**
			 * shows Theme Picker in UI
			 *
			 * @default true
			 */
			enabled: boolean;
		}
	};

	/**
	 * Specifies the list of supported date formats
	 * https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		dateFormats = ['yyyy/MM/dd HH:mm:ss', 'yyyy/MM/dd', 'HH:mm:ss', 'tt hh:mm:ss']
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		dateFormats = ['yyyy/MM/dd HH:mm:ss', 'yyyy/MM/dd', 'HH:mm:ss', 'tt hh:mm:ss']
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		dateFormats = ['yyyy/MM/dd HH:mm:ss', 'yyyy/MM/dd', 'HH:mm:ss', 'tt hh:mm:ss']
	 * });
	 * ```
	 */
	dateFormats: string[];

	/**
	 * Specifies the list of supported image mime-types
	 */
	imageMimeTypes: string[];

	/**
	 * Specifies the default measurement units
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		storeUserPreferences: false,
	 *      units: 'cm'
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		storeUserPreferences: false,
	 *      units: 'cm'
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		storeUserPreferences: false,
	 *       units: 'cm'
	 * });
	 * ```
	 * @default 'in'
	 */
	units: 'in' | 'cm';

	/**
	 * When **lockLayout** is enabled, it is only possible to modify properties of existing report items.\
	 * I.e., adding a new report item or deleting of an existing one is not possible as well as other operations that modify report layout structure.\
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * var api = arWebDesigner.apiOf('ar-web-designer');
	 * designer.lockLayout = 'true';
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * var api = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * designer.lockLayout = 'true';
	 * ```
	 * @example
	 * ```typescript
	 * const api = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	 * designer.lockLayout = 'true';
	 * ```
	 * @default false
	 */
	lockLayout: boolean;

	/**
	 * Document to open on app startup, if not set new empty document will be created
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		document: { id: 'reportId', type: { type: 'report', platform: 'rdlx' }}
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		document: { id: 'reportId', type: { type: 'report', platform: 'rdlx' }}
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * const designer = GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		document: { id: 'reportId', type: { type: 'report', platform: 'rdlx' }}
	 * });
	 * ```
	 */
	document?: {
		id: string;
		type: SupportedDocumentType;
	};

	/**
	 * When **storeUnsavedReport** is **enabled**, the last unsaved report can be restored if browser tab or browser itself gets accidentally closed.\
	 * In case **storeUnsavedReport** is **disabled**, the aforementioned functionality is not available
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * });
	 * ```
	 * @default true
	 */
	storeUnsavedReport: boolean;

	/**
	 * When **storeUserPreferences** is **enabled**, user preferences will be saved to a browser storage.\
	 * In case **storeUnsavedReport** is **disabled**, the aforementioned functionality is not available
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		storeUnsavedReport: false
	 * });
	 * ```
	 * @default true
	 */
	storeUserPreferences: boolean;

	/**
	 * By default, focused elements (like buttons) are highlighted only for a small period of time after **Tab** key was pressed.\
	 * This settings makes focused elements permanently highlighted.
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		disableFocusTimer: true
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		disableFocusTimer: true
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		disableFocusTimer: true
	 * });
	 * ```
	 * @default false
	 */
	disableFocusTimer: boolean;

	/**
	 * Disable usage of system clipboard. Copy-paste between designer instances will work only in the same browser in the same domain
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		disableSystemClipboard: true
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		disableSystemClipboard: true
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		disableSystemClipboard: true
	 * });
	 * ```
	 * @default false
	 */
	disableSystemClipboard: boolean;

	/**
	 * Return filtered array of descriptors  in the order in which descriptors should be rearranged
	 *
	 * @example
	 * ```javascript
	 * // ESM usage
	 * import { arWebDesigner } from './web-designer.js';
	 * arWebDesigner.create('#ar-web-designer', {
	 *		filterProperties: (descriptors, item, platform) => {
	 *			return descriptors.filter(d =>
	 *			{
	 *				return d.valuePath !== 'Value'
	 *				&& d.valuePath !== 'Name'
	 *				&& d.valuePath !== 'Style.Format'
	 *				&& d.category !== 'propertyDescriptors:categories.layout'
	 *			});
	 *		}
	 * });
	 * ```
	 * @example
	 * ```javascript
	 * // UMD usage
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		filterProperties: (descriptors, item, platform) => {
	 *			return descriptors.filter(d =>
	 *			{
	 *				return d.valuePath !== 'Value'
	 *				&& d.valuePath !== 'Name'
	 *				&& d.valuePath !== 'Style.Format'
	 *				&& d.category !== 'propertyDescriptors:categories.layout'
	 *			});
	 *		}
	 * });
	 * ```
	 * @example
	 * ```typescript
	 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	 *		filterProperties: (descriptors: PropertyDescriptor[], item: Record<string, any>, platform: 'rdlx' | 'rpx') => {
	 *			return descriptors.filter(d =>
	 *			{
	 *				return d.valuePath !== 'Value'
	 *				&& d.valuePath !== 'Name'
	 *				&& d.valuePath !== 'Style.Format'
	 *				&& d.category !== 'propertyDescriptors:categories.layout'
	 *			});
	 *		}
	 * });
	 * ```
	 */
	filterProperties?: (descriptors: PropertyDescriptor[], item: Record<string, any>, platform: 'rdlx' | 'rpx') => PropertyDescriptor[];

	/** Editor settings */
	editor: {

		/** Rulers settings
		*
		* @example
		* ```javascript
		* // ESM usage
		* import { arWebDesigner } from './web-designer.js';
		* arWebDesigner.create('#ar-web-designer', {
		*    editor: {
		*        rulers: {
		*            visible: true
		*        }
		*    }
		* });
		* ```
		* @example
		* ```javascript
		* // UMD usage
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		*    editor: {
		*        rulers: {
		*            visible: true
		*        }
		*    }
		* });
		* ```
		* @example
		* ```typescript
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		*    editor: {
		*        rulers: {
		*            visible: true
		*        }
		*    }
		* });
		* ```
		*/
		rulers?: {

			/** Specifies whether **Rulers** needs to be shown by default */
			visible: boolean;

			/** Specifies a snapStep value. By default snapStep = { in: 0.25, cm: 0.5 } */
			snapStep?: {
				in: number;
				cm: number;
			};
		};

		/** Specifies default grid size. If units = 'cm', value = 0.5cm by default. Else, value = 0,25in by default */
		gridSize?: string;

		/** Specifies if grid must be shown or hidden by default
		*
		* @example
		* ```javascript
		* // ESM usage
		* import { arWebDesigner } from './web-designer.js';
		* arWebDesigner.create('#ar-web-designer', {
		*    editor: {
		*        rulers: {
		*            visible: true
		*        }
		*    }
		* });
		* ```
		* @example
		* ```javascript
		* // UMD usage
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		*    editor: {
		*        rulers: {
		*            visible: true
		*        }
		*    }
		* });
		* ```
		* @example
		* ```typescript
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		*    editor: {
		*        rulers: {
		*            visible: true
		*        }
		*    }
		* });
		* ```
		*/
		showGrid?: boolean;

		/** Specifies default value for the snapToGrid option
		* @example
		* ```javascript
		* // ESM usage
		* import { arWebDesigner } from './web-designer.js';
		* arWebDesigner.create('#ar-web-designer', {
		*    editor: {
		*        snapToGrid: true
		*    }
		* });
		* ```
		* @example
		* ```javascript
		* // UMD usage
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		*    editor: {
		*        snapToGrid: true
		*    }
		* });
		* ```
		* @example
		* ```typescript
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		*    editor: {
		*        snapToGrid: true
		*    }
		* });
		* ```
		* @default false
		*/
		snapToGrid?: boolean;

		/**
		* Specifies default value for the snapToGuides option
		* @example
		* ```javascript
		* // ESM usage
		* import { arWebDesigner } from './web-designer.js';
		* arWebDesigner.create('#ar-web-designer', {
		*    editor: {
		*        snapToGuides: true
		*    }
		* });
		* ```
		* @example
		* ```javascript
		* // UMD usage
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		*    editor: {
		*        snapToGuides: true
		*    }
		* });
		* ```
		* @example
		* ```typescript
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		*    editor: {
		*        snapToGuides: true
		*    }
		* });
		* ```
		* @default false
		*/
		snapToGuides?: boolean;
	};

	/** **App Bar** settings */
	appBar: {
		/**
		 * Specifies whether **App Bar** needs to be shown\
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 * 		appBar: {
		 * 			visible: false
		 * 		}
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 		appBar: {
		 * 			visible: false
		 * 		}
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 		appBar: {
		 * 			visible: false
		 * 		}
		 * });
		 * ```
		 * @default true
		 */
		visible: boolean;


		/** **Save** button settings */
		saveButton: {
			/**
			 * Specifies whether **Save** button needs to be shown
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *	appBar: {
			 *		saveButton: { visible: true }
			 *	}
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	appBar: {
			 *		saveButton: { visible: true }
			 *	}
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	appBar: {
			 *		saveButton: { visible: true }
			 *	}
			 * });
			 * ```
			 * @default true
			 */
			visible: boolean;
		};

		/** **Save As** button settings */
		saveAsButton: {
			/**
			* Specifies whether **Save As** button needs to be shown
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*	appBar: {
			*		saveAsButton: { visible: true }
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*		saveAsButton: { visible: true }
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*		saveAsButton: { visible: true }
			*	}
			* });
			* ```
			* @default true
			*/
			visible: boolean;
		};

		/** **Open** button settings */
		openButton: {
			/**
			* Specifies whether **Open** button needs to be shown
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*	appBar: {
			*       openButton: { visible: true }
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*       openButton: { visible: true }
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*       openButton: { visible: true }
			*	}
			* });
			* ```
			* @default false
			*/
			visible: boolean;
		};

		/** **Insert** tab settings */
		insertTab: {
			/**
			* Specifies whether **Insert** tab needs to be shown in Designer application bar.\
			* **Tool Box** and **Insert** tab are interchangeable
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*	appBar: {
			*       insertTab: { visible: true }
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*       insertTab: { visible: true }
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*       insertTab: { visible: true }
			*	}
			* });
			* ```
			* @default false
			*/
			visible: boolean;
		};

		/** **Home** tab settings */
		homeTab: {
			/**
			* Specifies whether **Home** tab needs to be shown in Designer application bar.
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*	appBar: {
			*      homeTab: { visible: true }
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*      homeTab: { visible: true }
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*      homeTab: { visible: true }
			*	}
			* });
			* ```
			* @default true
			*/
			visible: boolean;
		};

		/** **Context Actions** tab settings */
		contextActionsTab: {
			/**
			* Specifies whether **Context Actions** tab needs to be shown in Designer application bar.
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*	appBar: {
			*       contextActionsTab: { visible: false }
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*       contextActionsTab: { visible: false }
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*       contextActionsTab: { visible: false }
			*	}
			* });
			* ```
			* @default true
			*/
			visible: boolean;
		};

		/** **Parameters** tab settings */
		parametersTab: {
			/**
			* Specifies whether **Parameters** tab needs to be shown in Designer application bar for rdlx documents.
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*	appBar: {
			*       parametersTab: { visible: false }
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*       parametersTab: { visible: false }
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*       parametersTab: { visible: false }
			*	}
			* });
			* ```
			* @default true
			*/
			visible: boolean;
		};

		/** **Script** tab settings */
		scriptTab: {
			/**
			* Specifies whether **Script** tab needs to be shown in Designer application bar for rpx documents.
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*	appBar: {
			*       scriptTab: { visible: false }
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*       scriptTab: { visible: false }
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	appBar: {
			*       scriptTab: { visible: false }
			*	}
			* });
			* ```
			* @default true
			*/
			visible: boolean;
		};
	};

	/** Tool Bar settings */
	toolBar: {
		/**
		* Specifies whether **Tool Bar** needs to be shown
		*
		* @example
		* ```javascript
		* // ESM usage
		* import { arWebDesigner } from './web-designer.js';
		* arWebDesigner.create('#ar-web-designer', {
		* 	 toolBar: { visible: false }
		* });
		* ```
		* @example
		* ```javascript
		* // UMD usage
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		* 	 toolBar: { visible: false }
		* });
		* ```
		* @example
		* ```typescript
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		* 	 toolBar: { visible: false }
		* });
		* ```
		* @default true
		*/
		visible: boolean;
	};

	/** **Menu** settings */
	menu: {
		/**
		* Specifies whether **Main Menu** needs to be shown
		* @example
		* ```javascript
		* // ESM usage
		* import { arWebDesigner } from './web-designer.js';
		* arWebDesigner.create('#ar-web-designer', {
		*      menu: { visible: false }
		* });
		* ```
		* @example
		* ```javascript
		* // UMD usage
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		*      menu: { visible: false }
		* });
		* ```
		* @example
		* ```typescript
		* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		*      menu: { visible: false }
		* });
		* ```
		* @default true
		*/
		visible: boolean;

		/** **Logo** settings */
		logo: {
			/**
			* Specifies whether logo needs to be shown in the menu
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*   menu: {
			*       logo: { visible: false }
			*   }
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*   menu: {
			*       logo: { visible: false }
			*   }
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*   menu: {
			*       logo: { visible: false }
			*   }
			* });
			* ```
			* @default true
			*/
			visible?: boolean;

			/**
			* Sets a custom logo to be shown in the menu
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 		menu: {
			*       	logo: { custom: { type: 'css', class: 'my-custom-icon' }; }
			*	 }
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 		menu: {
			*       	logo: { custom: { type: 'css', class: 'my-custom-icon' }; }
			*	 }
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 		menu: {
			*       	logo: { custom: { type: 'css', class: 'my-custom-icon' }; }
			*	 }
			* });
			* ```
			*/
			custom?: MenuIcon;
		};

		/** **Tool Box** settings */
		toolBox: {
			/**
			* Specifies whether left-side menu **Tool Box** needs to be shown
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*   menu: {
			*      toolBox: { visible: false }
			*   }
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*   menu: {
			*      toolBox: { visible: false }
			*   }
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*   menu: {
			*      toolBox: { visible: false }
			*   }
			* });
			* ```
			* @default true
			*/
			visible: boolean;
		};

		/** **Document Explorer** settings */
		documentExplorer: {
			/**
			* Specifies whether **Document Explorer** button needs to be shown
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*   menu: {
			*       documentExplorer: { visible: false }
			*   }
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*   menu: {
			*       documentExplorer: { visible: false }
			*   }
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*   menu: {
			*       documentExplorer: { visible: false }
			*   }
			* });
			* ```
			* @default true
			*/
			visible: boolean;
		};

		/** **Group Editor** settings */
		groupEditor: {
			/**
			* Specifies whether **Group Editor** button needs to be shown.
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*   menu: {
			*       groupEditor: { visible: false }
			*   }
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*   menu: {
			*       groupEditor: { visible: false }
			*   }
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*   menu: {
			*       groupEditor: { visible: false }
			*   }
			* });
			* ```
			* @default true
			*/
			visible: boolean;
		};

		/** **Layer Editor** settings */
		layerEditor: {
			/**
			* Specifies whether **Layer Editor** button needs to be shown.
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*   menu: {
			*       layerEditor: { visible: false }
			*   }
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*   menu: {
			*       layerEditor: { visible: false }
			*   }
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*   menu: {
			*       layerEditor: { visible: false }
			*   }
			* });
			* ```
			* @default true
			*/
			visible: boolean;
		};
	};

	/** Status Bar settings */
	statusBar: {

		/**
		 * Specifies whether **Status Bar** needs to be shown
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 *   statusBar: { visible: false }
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *   statusBar: { visible: false }
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *   statusBar: { visible: false }
		 * });
		 * ```
		 * @default true
		 */
		visible: boolean;

		toggleUnitsButton: {
			/**
			 * Specifies whether **Units Button** button needs to be shown
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *    statusBar: {
			 *        toggleUnitsButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    statusBar: {
			 *        toggleUnitsButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    statusBar: {
			 *        toggleUnitsButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @default true
			 */
			visible: boolean;
		};

		toggleGridButton: {
			/**
			 * Specifies whether **Show Grid** toggle needs to be shown
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *    statusBar: {
			 *        toggleGridButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    statusBar: {
			 *        toggleGridButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    statusBar: {
			 *        toggleGridButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @default true
			 */
			visible: boolean;
		};
		gridSizeEditor: {
			/**
			 * Specifies whether **Grid Size** editor needs to be shown
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *    statusBar: {
			 *        gridSizeEditor: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    statusBar: {
			 *        gridSizeEditor: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    statusBar: {
			 *        gridSizeEditor: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @default true
			 */
			visible: boolean;
		};
		rulersButton: {
			/**
			 * Specifies whether **Show Rulers** toggle needs to be shown
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *    statusBar: {
			 *        rulersButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    statusBar: {
			 *        rulersButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    statusBar: {
			 *        rulersButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @default true
			 */
			visible: boolean;
		};
		propertiesModeButton: {
			/**
			 * Specifies whether **Properties Mode** dropdown needs to be shown
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *    statusBar: {
			 *        propertiesModeButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    statusBar: {
			 *        propertiesModeButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    statusBar: {
			 *        propertiesModeButton: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @default true
			 */
			visible: boolean;
		};
	};

	/** Property Grid settings */
	propertyGrid: {
		propertiesTab: {
			/**
			 * Specifies whether **Properties** tab needs to be shown
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *    propertyGrid: {
			 *        propertiesTab: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    propertyGrid: {
			 *        propertiesTab: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *    propertyGrid: {
			 *        propertiesTab: {
			 *            visible: true
			 *        }
			 *    }
			 * });
			 * ```
			 * @default true
			 */
			visible?: boolean;
		}

		/**
		 * Specifies default properties mode
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 *    propertyGrid: {
		 *        propertiesTab: {
		 *            mode: 'Basic'
		 *        }
		 *    }
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *    propertyGrid: {
		 *        propertiesTab: {
		 *            mode: 'Basic'
		 *        }
		 *    }
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *    propertyGrid: {
		 *        propertiesTab: {
		 *            mode: 'Basic'
		 *        }
		 *    }
		 * });
		 * ```
		 */
		mode?: 'Basic' | 'Advanced';

		/**
		 * Specifies default properties sort mode
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 *    propertyGrid: {
		 *        propertiesTab: {
		 *            sort: 'alphabetical'
		 *        }
		 *    }
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *    propertyGrid: {
		 *        propertiesTab: {
		 *            sort: 'alphabetical'
		 *        }
		 *    }
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *    propertyGrid: {
		 *        propertiesTab: {
		 *            sort: 'alphabetical'
		 *        }
		 *    }
		 * });
		 * ```
		 */
		sort?: 'categorized' | 'alphabetical';

		collapsibleCategories?: {
			/**
			* When set to true, Property Grid categories become collapsible, and app memorizes categories expanded/collapsed states.
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*    propertyGrid: {
			*        propertiesTab: {
			*			collapsibleCategories: {
			*				enabled: false
			*			}
			*        }
			*    }
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*    propertyGrid: {
			*        propertiesTab: {
			*			collapsibleCategories: {
			*				enabled: false
			*			}
			*        }
			*    }
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*    propertyGrid: {
			*        propertiesTab: {
			*			collapsibleCategories: {
			*				enabled: false
			*			}
			*        }
			*    }
			* });
			* ```
			* @default true
			*/
			enabled?: boolean;
		};

		saveExpandEditorsState?: {
			/**
			* When set to true, app memorizes editors expanded/collapsed states.
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*    propertyGrid: {
			*        propertiesTab: {
			*			saveExpandEditorsState: {
			*				enabled: false
			*			}
			*        }
			*    }
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*    propertyGrid: {
			*        propertiesTab: {
			*			saveExpandEditorsState: {
			*				enabled: false
			*			}
			*        }
			*    }
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*    propertyGrid: {
			*        propertiesTab: {
			*			saveExpandEditorsState: {
			*				enabled: false
			*			}
			*        }
			*    }
			* });
			* ```
			* @default true
			*/
			enabled?: boolean;
		};
	};

	/** Documents API settings */
	documents: {
		/** **File View** settings */
		fileView: {
			/**
			* Specifies whether **File View** tab needs to be shown
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*		documents: {
			*			fileView: {
			*				visible: false,
			*			}
			*		}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*		documents: {
			*			fileView: {
			*				visible: false,
			*			}
			*		}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*		documents: {
			*			fileView: {
			*				visible: false,
			*			}
			*		}
			*    }
			* });
			* ```
			* @default true
			*/
			visible: boolean;
		};

		handlers: {
			/** An async handler, cancels saving process if returned false
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*		documents: {
			*			fileView: {
			*		handlers: {
			*			onBeforeSave: (info) => {
			*				return new Promise((resolve, reject) => {
			*					resolve(false);
			*				});
			*			}
			*		}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	documents: {
			*		handlers: {
			*			onBeforeSave: (info) => {
			*				return new Promise((resolve, reject) => {
			*					resolve(false);
			*				});
			*			}
			*		}
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	documents: {
			*		handlers: {
			*			onBeforeSave: (info: SaveDocumentInfo) => {
			*				return new Promise((resolve, reject) => {
			*					resolve(false);
			*				});
			*			}
			*		}
			*	}
			* });
			* ```
			*/
			onBeforeSave?: (info: SaveDocumentInfo) => Promise<boolean>,
			/** A handler that is called when save is complete
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			*		documents: {
			*			fileView: {
			*		handlers: {
			*			onBeforeSave: (info) => {
			*				return new Promise((resolve, reject) => {
			*					resolve(false);
			*				});
			*			}
			*		}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	documents: {
			*		handlers: {
			*			onAfterSave: (info) => {
			*				if (!info.success) throw new Error(`Report saving error`);
			*			}
			*		}
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			*	documents: {
			*		handlers: {
			*			onAfterSave: (info) => {
			*				if (!info.success) throw new Error(`Report saving error`);
			*			}
			*		}
			*	}
			* });
			* ```
			*/
			onAfterSave?: (info: SaveDocumentInfo) => void,

			/** An async handler, cancels opening process if returned false
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*			onBeforeOpen: () => {
			*				return new Promise((resolve, reject) => {
			*					resolve(false);
			*				});
			*			}
			*        }
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*			onBeforeOpen: () => {
			*				return new Promise((resolve, reject) => {
			*					resolve(false);
			*				});
			*			}
			*        }
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*			onBeforeOpen: () => {
			*				return new Promise((resolve, reject) => {
			*					resolve(false);
			*				});
			*			}
			*        }
			*	}
			* });
			* ```
			*/
			onBeforeOpen?: () => Promise<boolean>,
			/** A handler that is called when open is complete
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*            onAfterOpen: () => {
			*				console.log('New report opened successful.')
			*			}
			*        }
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*            onAfterOpen: () => {
			*				console.log('New report opened successful.')
			*			}
			*        }
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*            onAfterOpen: () => {
			*				console.log('New report opened successful.')
			*			}
			*        }
			*	}
			* });
			* ```
			*/
			onAfterOpen?: () => void,

			/** An async handler, cancels create process if returned false
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*            onBeforeCreate: () => {return false}
			*        }
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*            onBeforeCreate: () => {return false}
			*        }
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*            onBeforeCreate: () => {return false}
			*        }
			*	}
			* });
			* ```
			*/
			onBeforeCreate?: () => Promise<boolean>,
			/** A handler that is called when create is complete
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*           onAfterCreate: () => {
			*				console.log('New report created successful.')
			*			}
			*       }
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*           onAfterCreate: () => {
			*				console.log('New report created successful.')
			*			}
			*       }
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*        handlers: {
			*           onAfterCreate: () => {
			*				console.log('New report created successful.')
			*			}
			*       }
			*	}
			* });
			* ```
			*/
			onAfterCreate?: () => void,

			/** A handler that is triggered when report name/id is updated
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	documents: {
			*       handlers: {
			*           onInfoUpdate: (options) => {
			*				console.log(`name changed ${options.name}`);
			*			}
			*		}
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*       handlers: {
			*           onInfoUpdate: (options) => {
			*				console.log(`name changed ${options.name}`);
			*			}
			*		}
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*       handlers: {
			*           onInfoUpdate: (options:
			*                {
			*                    name: string,
			*                    id?: string,
			*                    type: SupportedDocumentType['type'],
			*                    platform: SupportedDocumentType['platform']
			*                }) =>
			*					{console.log(`name changed ${options.name}`);}
			*		}
			*	}
			* });
			* ```
			*/
			onInfoUpdate?: (options: { name: string, id?: string, type: SupportedDocumentType['type'], platform: SupportedDocumentType['platform'] }) => void;

			/** A handler that is triggered when report content is changed
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	documents: {
			*       handlers: {
			*			onDocumentChanged: (options) => {
			*				if (options.hasUnsavedChanges) console.log('Currently edited report has unsaved changes.');
			*			}
			*		}
			*	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*       handlers: {
			*			onDocumentChanged: (options) => {
			*				if (options.hasUnsavedChanges) console.log('Currently edited report has unsaved changes.');
			*			}
			*		}
			*	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	documents: {
			*		handlers: {
			*			onDocumentChanged: (options: { document: any, hasUnsavedChanges: boolean }) => {
			*				if (options.hasUnsavedChanges) console.log('Currently edited report has unsaved changes.');
			*			}
			*		}
			*	}
			* });
			* ```
			*/
			onDocumentChanged?: (options: { document: any, hasUnsavedChanges: boolean }) => void;
		};
	};

	/** **Data**-related settings */
	data: {
		dataTab: {
			/**
			* Specifies whether **Data** tab needs to be shown
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	data: {
			* 		dataTab: {
			*			visible:false
			*		}
			* 	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	data: {
			* 		dataTab: {
			*			visible:false
			*		}
			* 	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	data: {
			* 		dataTab: {
			*			visible:false
			*		}
			* 	}
			* });
			* ```
			* @default true
			*/
			visible: boolean;
		};

		/** **Data Sources** section settings */
		dataSources: {
			/**
			* Specifies whether **Data Sources** section needs to be shown
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	data: {
			*		dataSources: {
			*			visible: false
			*		}
			* 	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	data: {
			*		dataSources: {
			*			visible: false
			*		}
			* 	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	data: {
			*		dataSources: {
			*			visible: false
			*		}
			* 	}
			* });
			* ```
			* @default true
			*/
			visible: boolean;

			/**
			* Specifies whether it is possible to modify (including add/edit/remove) data sources
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	data: {
			*		dataSources: {
			*			canModify: true
			*		}
			* 	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	data: {
			*		dataSources: {
			*			canModify: true
			*		}
			* 	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	data: {
			*		dataSources: {
			*			canModify: true
			*		}
			* 	}
			* });
			* ```
			* @default false
			*/
			canModify: boolean;

			/**
			* Set to true to enable Shared Data Sources support
			*
			* @example
			* ```javascript
			* // ESM usage
			* import { arWebDesigner } from './web-designer.js';
			* arWebDesigner.create('#ar-web-designer', {
			* 	data: {
			*		dataSources: {
			*			shared: {
			*				enabled: true
			*			}
			*		}
			* 	}
			* });
			* ```
			* @example
			* ```javascript
			* // UMD usage
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	data: {
			*		dataSources: {
			*			shared: {
			*				enabled: true
			*			}
			*		}
			* 	}
			* });
			* ```
			* @example
			* ```typescript
			* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			* 	data: {
			*		dataSources: {
			*			shared: {
			*				enabled: true
			*			}
			*		}
			* 	}
			* });
			* ```
			* @default false
			*/
			shared: {
				enabled: boolean;
			},

			options: {
				/** Specifies the list of predefined data providers available in data source editor.\
				 * By default all the predefined providers are present.
				 *
				 * @example
				 * ```javascript
				 * // ESM usage
				 * import { arWebDesigner } from './web-designer.js';
				 * arWebDesigner.create('#ar-web-designer', {
				 * 	data: {
				 *		dataSources: {
				 *			options: {
				 *				predefinedProviders: ['SQL', 'JSON']
				 *			}
				 *		}
				 * 	}
				 * });
				 * ```
				 * @example
				 * ```javascript
				 * // UMD usage
				 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
				 * 	data: {
				 *		dataSources: {
				 *			options: {
				 *				predefinedProviders: ['SQL', 'JSON']
				 *			}
				 *		}
				 * 	}
				 * });
				 * ```
				 * @example
				 * ```typescript
				 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
				 * 	data: {
				 *		dataSources: {
				 *			options: {
				 *				predefinedProviders: ['SQL', 'JSON']
				 *			}
				 *		}
				 * 	}
				 * });
				 * ```
				 */
				predefinedProviders: ('SQL' | 'OLEDB' | 'ODBC' | 'JSON' | 'CSV' | 'XML')[];

				/** Specifies the list of OLE DB providers available in data source editor.\
				 * By default 'Microsoft.Jet.OLEDB.4.0', 'SQLOLEDB.1', 'MSDataShape.1', 'MSDASQL.1' are present.
				 *
				 * @example
				 * ```javascript
				 * // ESM usage
				 * import { arWebDesigner } from './web-designer.js';
				 * arWebDesigner.create('#ar-web-designer', {
				 * 	data: {
				 *		dataSources: {
				 *			options: {
				 *				oleDbProviders: ['Microsoft.Jet.OLEDB.4.0', 'SQLOLEDB.1']
				 *			}
				 *		}
				 * 	}
				 * });
				 * ```
				 * @example
				 * ```javascript
				 * // UMD usage
				 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
				 * 	data: {
				 *		dataSources: {
				 *			options: {
				 *				oleDbProviders: ['Microsoft.Jet.OLEDB.4.0', 'SQLOLEDB.1']
				 *			}
				 *		}
				 * 	}
				 * });
				 * ```
				 * @example
				 * ```typescript
				 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
				 * 	data: {
				 *		dataSources: {
				 *			options: {
				 *				oleDbProviders: ['Microsoft.Jet.OLEDB.4.0', 'SQLOLEDB.1']
				 *			}
				 *		}
				 * 	}
				 * });
				 * ```
				 */
				oleDbProviders: string[];

				/** Specifies the list of custom data providers available in data source editor.\
				 * By default there are no custom data providers present.
				 *
				 * @example
				 * ```javascript
				 * // ESM usage
				 * import { arWebDesigner } from './web-designer.js';
				 * arWebDesigner.create('#ar-web-designer', {
				 * 	data: {
				 *		dataSources: {
				 *			options: {
				 *				customProviders:[{ key: 'CDP', name: 'Custom Data Provider' }]
				 *			}
				 *		}
				 * 	}
				 * });
				 * ```
				 * @example
				 * ```javascript
				 * // UMD usage
				 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
				 * 	data: {
				 *		dataSources: {
				 *			options: {
				 *				customProviders:[{ key: 'CDP', name: 'Custom Data Provider' }]
				 *			}
				 *		}
				 * 	}
				 * });
				 * ```
				 * @example
				 * ```typescript
				 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
				 * 	data: {
				 *		dataSources: {
				 *			options: {
				 *				customProviders:[{ key: 'CDP', name: 'Custom Data Provider' }]
				 *			}
				 *		}
				 * 	}
				 * });
				 * ```
				 */
				customProviders: {
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
				}[];
			};
		};

		dataSets: {
			/**
			 * Specifies whether **Data Sets** section needs to be shown.\
			 *
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *	data: {
			 *		dataSets: {
			 *			visible: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	data: {
			 *		dataSets: {
			 *			visible: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	data: {
			 *		dataSets: {
			 *			visible: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @default true
			 */
			visible: boolean;

			/**
			 * Specifies whether it is possible to modify (including add/edit/remove) data sets.\
			 *
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *	data: {
			 *		dataSets: {
			 *			canModify:true
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	data: {
			 *		dataSets: {
			 *			canModify:true
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	data: {
			 *		dataSets: {
			 *			canModify:true
			 *		}
			 *	}
			 * });
			 * ```
			 * @default false
			 */
			canModify: boolean;
		};

		parameters: {
			/**
			 * Specifies whether **Parameters** section needs to be shown.\
			 *
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *	data: {
			 *		parameters: {
			 *			visible: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	data: {
			 *		parameters: {
			 *			visible: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	data: {
			 *		parameters: {
			 *			visible: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @default true
			 */
			visible: boolean;

			/**
			 * Specifies whether it is possible to modify (including add/edit/remove) report parameters.\
			 *
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *	data: {
			 *		parameters: {
			 *			canModify: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	data: {
			 *		parameters: {
			 *			canModify: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	data: {
			 *		parameters: {
			 *			canModify: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @default true
			 */
			canModify: boolean;
		};

		commonValues: {
			/**
			 * Specifies whether **Common Values** section needs to be shown.\
			 *
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *	data: {
			 *		commonValues: {
			 *			visible: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	data: {
			 *		commonValues: {
			 *			visible: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	data: {
			 *		commonValues: {
			 *			visible: false
			 *		}
			 *	}
			 * });
			 * ```
			 * @default true
			 */
			visible: boolean;
		};
	};

	/** RPX **Styles**-related settings */
	styles: {
		stylesTab: {
			/**
			 * Specifies whether **Styles** tab needs to be shown for RPX reports
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *	styles: {
			 *		stylesTab: {
			 *			visible:false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	styles: {
			 *		stylesTab: {
			 *			visible:false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	styles: {
			 *		stylesTab: {
			 *			visible:false
			 *		}
			 *	}
			 * });
			 * ```
			 * @default true
			 */
			visible: boolean;
		};

		stylesheet: {
			/**
			 * Specifies whether RPX report Stylesheet can be modified
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *	styles: {
			 *		stylesTab: {
			 *			canModify:false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	styles: {
			 *		stylesTab: {
			 *			canModify:false
			 *		}
			 *	}
			 * });
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *	styles: {
			 *		stylesTab: {
			 *			canModify:false
			 *		}
			 *	}
			 * });
			 * ```
			 * @default true
			 */
			canModify: boolean;
		};
	};

	/** Backend-related settings */
	server: {
		/**
		 * Specifies the base URL for Designer Server API.
		 * @default api
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 *	server: {
		 *		url: 'api/designer'
		 *	}
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *	server: {
		 *		url: 'api/designer'
		 *	}
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *	server: {
		 *		url: 'api/designer'
		 *	}
		 * });
		 * ```
		 */
		url: string;

		/**
		 * Callback allowing to modify http requests before sending them. Use either this or async version.
		 */
		onBeforeRequest?: (init: RequestInit) => RequestInit;

		/**
		 * Async version of onBeforeRequest. Use either this or normal version.
		 */
		onBeforeRequestAsync?: (init: RequestInit) => Promise<RequestInit>;
	};

	/** Document **Title** settings */
	title: {
		/**
		 * You can implement custom logic for updating browser tab's title when edited document gets updated in Designer
		 * @param options TitleInfo object
		 * @default undefined
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 *       title: {
		 *           onUpdate: (info) =>
		 *				`${info.name}${info.hasUnsavedChanges ? ' - Has Unsaved Changes!' : info.name}`
		 *       }
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *       title: {
		 *           onUpdate: (info) =>
		 *				`${info.name}${info.hasUnsavedChanges ? ' - Has Unsaved Changes!' : info.name}`
		 *       }
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *       title: {
		 *           onUpdate: (info: TitleInfo) =>
		 *				`${info.name}${info.hasUnsavedChanges ? ' - Has Unsaved Changes!' : info.name}`
		 *       }
		 * });
		 * ```
		 */
		onUpdate?: (info: TitleInfo) => string;

		/**
		 * Specifies whether browser tab title can be updated
		 * @default false
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 *      title: {
		 *			disabled: true
		 *		}
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *      title: {
		 *			disabled: true
		 *		}
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *      title: {
		 *			disabled: true
		 *		}
		 * });
		 * ```
		 */
		disabled: boolean;
	};

	/** Document **Preview** settings */
	preview: {
		/**
		 * Specifies whether **Preview** button needs to be shown
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 *  preview: {
		 *      canPreview: false
		 *   }
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *  preview: {
		 *      canPreview: false
		 *   }
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *  preview: {
		 *      canPreview: false
		 *   }
		 * });
		 * ```
		 *
		 * @default true
		 */
		canPreview?: boolean;

		/**
		 * You can plug-in **Viewer** component by providing **openViewer** function\
		 * @param settings ViewerSettings object
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 *  preview: {
		 *      openViewer: (info) =>
		 *          console.log(info.applicationTitle)
		 *   }
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *  preview: {
		 *      openViewer: (info) =>
		 *          console.log(info.applicationTitle)
		 *   }
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *  preview: {
		 *      openViewer: (info: ViewerSettings) =>
		 *          console.log(info.applicationTitle)
		 *   }
		 * });
		 * ```
		 */
		openViewer: (settings: ViewerSettings) => void;
	}

	/** RPX platform-specific settings
	*
	*
	* @example
	* ```javascript
	* // ESM usage
	* import { arWebDesigner } from './web-designer.js';
	* arWebDesigner.create('#ar-web-designer', {
	*	rpx: {
	*			enabled: true,
	*			metricTemplates: ['{"Name":"Report","Width":"10cm","Layers":[{"Name":"default1"}],"CustomProperties":[{"Name":"DisplayType","Value":"Page"},{"Name":"SizeType","Value":"Default"},{"Name":"PaperOrientation","Value":"Portrait"}],"Page":{"PageWidth":"8.5in","PageHeight":"11in","RightMargin":"1in","LeftMargin":"1in","TopMargin":"1in","BottomMargin":"1in","Columns":1,"ColumnSpacing":"0in"},"Body":{"Height":"0.75cm","ReportItems":[{"Type":"textbox","Name":"TextBox1","CustomProperties":[],"CanGrow":true,"KeepTogether":true,"Style":{"PaddingLeft":"2pt","PaddingRight":"2pt","PaddingTop":"2pt","PaddingBottom":"2pt"},"Left":"0cm","Top":"0cm","Width":"10cm","Height":"5cm"}]}}'],
	*		}
	*	);
	*
	* 	var designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	*	designer.documents.create({
	*	name: 'MyReport.rpx',
	*	type:
	*		{
	*			platform: 'rpx',
	*			type: 'report',
	*		}
	*	})
	* ```
	* @example
	* ```javascript
	* // UMD usage
	* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	*	rpx: {
	*			enabled: true,
	*			metricTemplates: ['{"Name":"Report","Width":"10cm","Layers":[{"Name":"default1"}],"CustomProperties":[{"Name":"DisplayType","Value":"Page"},{"Name":"SizeType","Value":"Default"},{"Name":"PaperOrientation","Value":"Portrait"}],"Page":{"PageWidth":"8.5in","PageHeight":"11in","RightMargin":"1in","LeftMargin":"1in","TopMargin":"1in","BottomMargin":"1in","Columns":1,"ColumnSpacing":"0in"},"Body":{"Height":"0.75cm","ReportItems":[{"Type":"textbox","Name":"TextBox1","CustomProperties":[],"CanGrow":true,"KeepTogether":true,"Style":{"PaddingLeft":"2pt","PaddingRight":"2pt","PaddingTop":"2pt","PaddingBottom":"2pt"},"Left":"0cm","Top":"0cm","Width":"10cm","Height":"5cm"}]}}'],
	*		}
	*	);
	*
	* 	var designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	*	designer.documents.create({
	*	name: 'MyReport.rpx',
	*	type:
	*		{
	*			platform: 'rpx',
	*			type: 'report',
	*		}
	*	})
	* ```
	* @example
	* ```typescript
	* GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
	*	rpx: {
	*			enabled: true,
	*			metricTemplates: ['{"Name":"Report","Width":"10cm","Layers":[{"Name":"default1"}],"CustomProperties":[{"Name":"DisplayType","Value":"Page"},{"Name":"SizeType","Value":"Default"},{"Name":"PaperOrientation","Value":"Portrait"}],"Page":{"PageWidth":"8.5in","PageHeight":"11in","RightMargin":"1in","LeftMargin":"1in","TopMargin":"1in","BottomMargin":"1in","Columns":1,"ColumnSpacing":"0in"},"Body":{"Height":"0.75cm","ReportItems":[{"Type":"textbox","Name":"TextBox1","CustomProperties":[],"CanGrow":true,"KeepTogether":true,"Style":{"PaddingLeft":"2pt","PaddingRight":"2pt","PaddingTop":"2pt","PaddingBottom":"2pt"},"Left":"0cm","Top":"0cm","Width":"10cm","Height":"5cm"}]}}'],
	*		}
	*	);
	*
	* 	const designer = GrapeCity.ActiveReports.Designer.apiOf('ar-web-designer');
	*	designer.documents.create({
	*	name: 'MyReport.rpx',
	*	type:
	*		{
	*			platform: 'rpx',
	*			type: 'report',
	*		}
	*	})
	* ```
	*/
	rpx: {
		/**
		 * Set to true to enable RPX support
		 * @default true
		 */
		enabled?: boolean;
		initTemplates?: {
			imperialTemplates?: string[];
			metricTemplates?: string[];
		};
		toolBoxContent?: RpxToolBoxItem[];
	};

	/** RDLX platform-specific settings */
	rdlx: {
		/**
		 * Specifies the expression syntax used in Designer:
		 * 'i11n' - interpolation syntax, 'rdl' is an "old" rdl expression syntax
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		expressionSyntax: 'rdl'
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		expressionSyntax: 'rdl'
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		expressionSyntax: 'rdl'
		 * 	}
		 * });
		 * ```
		 * @default 'i11n'
		 */
		expressionSyntax: 'i11n' | 'rdl';

		msl: {
			/**
			 * Set to true to enable Multi-Section Layout (MSL) support
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *		rdlx: {
			 *			msl: {
			 *				enabled: true
			 *			}
			 *		}
			 *	});
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *		rdlx: {
			 *			msl: {
			 *				enabled: true
			 *			}
			 *		}
			 *	});
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *		rdlx: {
			 *			msl: {
			 *				enabled: true
			 *			}
			 *		}
			 *	});
			 * ```
			 * @default true
			 */
			enabled?: boolean;
		};

		fpl: {
			/**
			 * Set to true to enable FPL support
			 * @default true
			 */
			enabled?: boolean;
		}

		dashboard: {
			/**
			 * Set to true to enable Dashboard support
			 *
			 * @example
			 * ```javascript
			 * // ESM usage
			 * import { arWebDesigner } from './web-designer.js';
			 * arWebDesigner.create('#ar-web-designer', {
			 *		rdlx: {
			 *			dashboard: {
			 *				enabled: true
			 *			}
			 *		}
			 *	});
			 * ```
			 * @example
			 * ```javascript
			 * // UMD usage
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *		rdlx: {
			 *			dashboard: {
			 *				enabled: true
			 *			}
			 *		}
			 *	});
			 * ```
			 * @example
			 * ```typescript
			 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
			 *		rdlx: {
			 *			dashboard: {
			 *				enabled: true
			 *			}
			 *		}
			 *	});
			 * ```
			 * @default true
			 */
			enabled?: boolean;
		};

		/** Report Parts feature related settings */
		reportParts?: ReportPartsSettings;

		/** Master reports feature related settings */
		masterReports?: {
			/**
			 * Enables master reports support.
			 * @default true
			 */
			enabled?: boolean;
		}

		/**
		* Filter for Expression Editor nodes
		*
		* @example
		* ```javascript
		* // ESM usage
		* import { arWebDesigner } from './web-designer.js';
		* arWebDesigner.create('#ar-web-designer', {
		* 	designerSettings.rdlx.expressionEditorNodesFilter = (key) => {
		* 		if (key.includes('commonValues')) return false;
		* 		if (key.includes('aggregate.aggregateIfWithScope')) return false;
		* 		return true;
		* ```
		* @example
		* ```javascript
		* // UMD usage
		* 	designerSettings.rdlx.expressionEditorNodesFilter = (key) => {
		* 		if (key.includes('commonValues')) return false;
		* 		if (key.includes('aggregate.aggregateIfWithScope')) return false;
		* 		return true;
		* 	}
		* ```
		* @example
		* ```typescript
		* // UMD usage
		* 	designerSettings.rdlx.expressionEditorNodesFilter = (key: string) => {
		* 		if (key.includes('commonValues')) return false;
		* 		if (key.includes('aggregate.aggregateIfWithScope')) return false;
		* 		return true;
		* 	}
		*/
		expressionEditorNodesFilter?: (key: string) => boolean;

		/**
		 * Specifies report items available and their order\
		 *
		 * Default items for CPL sections of MSL report: [ 'textbox', 'checkbox', 'container', 'line', 'shape', 'tableofcontents',
		 *	'image', 'list', 'table', 'tablix', 'chart', 'bullet', 'barcode', 'formattedtext',
		*	'richtext', 'sparkline', 'subreport', 'bandedlist', 'inputfield' ]
		*
		* Default items for FPL report: [ 'textbox', 'checkbox', 'container', 'line', 'shape', 'tableofcontents',
		*	'image', 'list', 'table', 'tablix', 'chart', 'bullet', 'barcode', 'formattedtext',
		*	'richtext', 'sparkline', 'subreport', 'overflowplaceholder', 'bandedlist', 'inputfield' ]
		*
		* **Example:**
		* ```javascript
		* designerSettings.rdlx.toolBoxContent = {
		* 		cpl: [ 'checkbox', 'container', 'textbox' ],
		* 		fpl: [ 'image', 'list', 'table', 'tablix', 'chart', 'bullet', 'barcode', 'formattedtext' ],
		* };
		* ```
		*/
		toolBoxContent?: {
			cpl: RdlxToolBoxItem[];
			fpl: RdlxToolBoxItem[];
		};

		/** Reports as a rdlx-json strings, report items from these reports will be used as a templates for creating new items
		 *
		 * imperialTemplates should include reports with units = 'in'
		 * metricTemplates should include reports with units = 'cm'
		 *
		 * Should use fpl-reports to set custom templates for specific fpl-reportItems, for example 'OverflowPlaceHolder'
		 * It is preferable to use msl-report with cpl section to set custom templates for all other report items, as well as for pageHeader and pageFooter.
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
		*	 designerSettings.rdlx.initTemplates = {
		*	 	imperialTemplates: ['{"Name":"Report","Width":"5in","Layers":[{"Name":"default"}],"CustomProperties":[{"Name":"DisplayType","Value":"Page"},{"Name":"SizeType","Value":"Default"},{"Name":"PaperOrientation","Value":"Portrait"}],"Page":{"PageWidth":"8.5in","PageHeight":"11in","RightMargin":"1in","LeftMargin":"1in","TopMargin":"1in","BottomMargin":"1in","Columns":1,"ColumnSpacing":"0in"},"Body":{"Height":"0.25in","ReportItems":[{"Type":"textbox","Name":"TextBox1","CustomProperties":[],"CanGrow":true,"KeepTogether":true,"Style":{"PaddingLeft":"2pt","PaddingRight":"2pt","PaddingTop":"2pt","PaddingBottom":"2pt"},"Width":"5in","Height":"0.25in"}]}}'],
		*	 	metricTemplates: ['{"Name":"Report","Width":"10cm","Layers":[{"Name":"default"}],"CustomProperties":[{"Name":"DisplayType","Value":"Page"},{"Name":"SizeType","Value":"Default"},{"Name":"PaperOrientation","Value":"Portrait"}],"Page":{"PageWidth":"8.5in","PageHeight":"11in","RightMargin":"1in","LeftMargin":"1in","TopMargin":"1in","BottomMargin":"1in","Columns":1,"ColumnSpacing":"0in"},"Body":{"Height":"0.75cm","ReportItems":[{"Type":"textbox","Name":"TextBox1","CustomProperties":[],"CanGrow":true,"KeepTogether":true,"Style":{"PaddingLeft":"2pt","PaddingRight":"2pt","PaddingTop":"2pt","PaddingBottom":"2pt"},"Left":"0cm","Top":"0cm","Width":"10cm","Height":"0.75cm"}]}}'],
		* 	};
		* 	 * ```
		*/
		initTemplates?: {
			imperialTemplates?: string[];
			metricTemplates?: string[];
		};

		/**
		 * Customizable report item features
		 */
		reportItemsFeatures: RdlxReportItemsSettings;

		/** Specifies additional styles to add to report item styles.
		 *
		 *	 **Example:**
		* ```javascript
		* designerSettings.rdlx.reportStyles = [
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
		reportStyles: ReportStyles[];
	};
};

type TitleInfo = {
	/** Document name */
	name: string;
	/** Indicates whether document has unsaved changes or not. */
	hasUnsavedChanges: boolean;
};

type RdlxToolBoxItem = 'textbox' | 'checkbox' | 'container' | 'line' | 'shape' | 'tableofcontents'
	| 'image' | 'list' | 'table' | 'tablix' | 'chart' | 'bullet' | 'barcode' | 'formattedtext'
	| 'richtext' | 'sparkline' | 'subreport' | 'overflowplaceholder' | 'bandedlist' | 'inputfield';

type RpxToolBoxItem = 'Label' | 'TextBox' | 'CheckBox' | 'RichTextBox' | 'Shape' | 'Picture' | 'Line'
	| 'PageBreak' | 'Barcode' | 'SubReport' | 'ReportInfo' | 'CrossSectionLine' | 'CrossSectionBox' | 'InputFieldText' | 'InputFieldCheckBox';

/** Copied from @grapecity/rdlx-model */
type DvChartPlotType =
	| 'Custom'
	| 'Bar'
	| 'Line'
	| 'Area'
	| 'Scatter'
	| 'HighLowOpenClose'
	| 'Candlestick'
	| 'Column'
	| 'Pie'
	| 'Pyramid'
	| 'Funnel'
	| 'Bubble'
	| 'Gantt'
	| 'HighLowClose'
	| 'PolarColumn'
	| 'PolarBar'
	| 'RadarArea'
	| 'RadarBubble'
	| 'RadarScatter'
	| 'RadarLine'
	| 'RangeArea'
	| 'RangeBar'
	| 'RangeColumn'
	| 'Gauge';

/** These are encodings from encodings adorner panel only */
type DvChartEncodingType = 'Details' | 'Color' | 'Shape' | 'Size' | 'Text';

type RdlxReportItemsSettings = {
	/** Barcode features */
	barcode: {
		/**
		 * Limits the list of barcode symbologies available for creation.\
		 * By default all barcode symbologies supported by ActiveReports are available.
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 * 			barcode: {
		 *				symbologies: ['Code_128_A', 'Code_128_B', 'Code_128_C']
		 * 			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 * 			barcode: {
		 *				symbologies: ['Code_128_A', 'Code_128_B', 'Code_128_C']
		 * 			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 * 			barcode: {
		 *				symbologies: ['Code_128_A', 'Code_128_B', 'Code_128_C']
		 * 			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 */
		symbologies?: RdlxBarcodeSymbology[];

		/** Hides some unsupported barcodeJS properties
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 * 			barcode: {
		 *				hideUnsupportedBarcodeJSProperties: true
		 * 			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 * 			barcode: {
		 *				hideUnsupportedBarcodeJSProperties: true
		 * 			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 * 			barcode: {
		 *				hideUnsupportedBarcodeJSProperties: true
		 * 			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 */
		hideUnsupportedBarcodeJSProperties?: boolean;
	};

	/** Chart features */
	chart: {
		/**
		 * Specifies whether Chart Wizard is available for creating Chart
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 *			chart: {
		 *				canUseWizard: false
		 *			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 *			chart: {
		 *				canUseWizard: false
		 *			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 *			chart: {
		 *				canUseWizard: false
		 *			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 * @default true
		 */
		canUseWizard?: boolean;

		/**
		 * Limits the list of plot chart types available for creation.\
		 * By default all plot chart types supported by ActiveReports are available.
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 *			chart: {
		 *				plotChartTypes: ['Column', 'Bar', 'Line']
		 *			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 *			chart: {
		 *				plotChartTypes: ['Column', 'Bar', 'Line']
		 *			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 *			chart: {
		 *				plotChartTypes: ['Column', 'Bar', 'Line']
		 *			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 */
		plotChartTypes?: DvChartPlotType[];

		/**
		 * Excludes given encodings from encoding panel in chart adorner
		 *
		 * @example
		 * ```javascript
		 * // ESM usage
		 * import { arWebDesigner } from './web-designer.js';
		 * arWebDesigner.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 *			chart: {
		 *				hiddenEncodings: ['Color', 'Text']
		 *			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```javascript
		 * // UMD usage
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 *			chart: {
		 *				hiddenEncodings: ['Color', 'Text']
		 *			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 * @example
		 * ```typescript
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 * 	rdlx: {
		 * 		reportItemsFeatures: {
		 *			chart: {
		 *				hiddenEncodings: ['Color', 'Text']
		 *			}
		 * 		}
		 * 	}
		 * });
		 * ```
		 */
		hiddenEncodings?: DvChartEncodingType[];
	};

	/** Table features */
	table: {
		/**
		 * Specifies whether **Table Header** needs to be auto-filled when a field is dropped to **Table Details**.\
		 * For example, if **ProductName** field is dropped to **Details**, **Product Name** value is set to **Header**
		 *
		 * **Example:**
		 * ```javascript
		 * designerSettings.rdlx.reportItemsFeatures.table.autoFillHeader = false;
		 * ```
		 * @default true
		 */
		autoFillHeader?: boolean;

		/**
		 * Specifies whether **Table Footer** needs to be auto-filled when a field is dropped to **Table Details**.\
		 * For example, if **ProductName** field is dropped to **Details**, **=Count([ProductName])** value is set to **Footer**
		 *
		 * **Example:**
		 * ```javascript
		 * designerSettings.rdlx.reportItemsFeatures.table.autoFillFooter = true;
		 * ```
		 * @default false
		 */
		autoFillFooter?: boolean;

		/**
		 * Specifies whether vertical merge of cells is enabled within **Table Header**, **Details** and **Footer**
		 *
		 * **Example:**
		 * ```javascript
		 * designerSettings.rdlx.reportItemsFeatures.table.canMergeCellsVertically = false;
		 * ```
		 * @default true
		 */
		canMergeCellsVertically?: boolean;

		/**
		 * Specifies whether Hide FrozenRows/FrozenColumns properties from PropertyGrid
		 *
		 * **Example:**
		 * ```javascript
		 * designerOptions.rdlx.reportItemsFeatures.table.hideFrozenRowsColumns = true;
		 * ```
		* @default false
		*/
		hideFrozenRowsColumns?: boolean;
	};

	/** Tablix features */
	tablix: {
		/**
		 * Specifies whether Tablix Wizard should hide cross-aggregates functionality
		 *
		 * **Example:**
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *		rdlx: {
		 *			reportItemsFeatures: {
		 *				tablix: {
		 *					crossAggregates: false
		 *				}
		 *			}
		 *		}
		 *	});
		 * **
		 * @default true
		 */
		crossAggregates?: boolean,

		/**
		 * Specifies whether **Tablix Corner Cell** needs to be auto-filled when a field is dropped to **Tablix Row Group Cell**.\
		 * For example, if **ProductName** field is dropped to **Row Group Cell**, **Product Name** value is set to **Corner Cell**
		 *
		 * **Example:**
		 * **Example:**
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *		rdlx: {
		 *			reportItemsFeatures: {
		 *				tablix: {
		 *					autoFillCorner: false
		 *				}
		 *			}
		 *		}
		 *	});
		 * **
		 * @default true
		 */
		autoFillCorner?: boolean;

		/**
		 * Specifies whether Tablix Wizard is available for creating/editing Tablix
		 *
		 * **Example:**
		 * **Example:**
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *		rdlx: {
		 *			reportItemsFeatures: {
		 *				tablix: {
		 *					canUseWizard: false
		 *				}
		 *			}
		 *		}
		 *	});
		 * **
		 * @default true
		 */
		canUseWizard?: boolean;

		/**
		 * Specifies whether Hide FrozenRows/FrozenColumns properties from PropertyGrid and TablixWizard
		 *
		 * **Example:**
		 * **Example:**
		 * GrapeCity.ActiveReports.Designer.create('#ar-web-designer', {
		 *		rdlx: {
		 *			reportItemsFeatures: {
		 *				tablix: {
		 *					hideFrozenRowsColumns: true
		 *				}
		 *			}
		 *		}
		 *	});
		 * **
		* @default false
		*/
		hideFrozenRowsColumns?: boolean;
	};
};

type RdlxBarcodeSymbology = 'Ansi39' | 'Ansi39x' | 'BC412' | 'Codabar' | 'Code_11' | 'Code_128_A' | 'Code_128_B' | 'Code_128_C' | 'Code_128auto'
	| 'Code_2_of_5' | 'Code_93' | 'Code25intlv' | 'Code39' | 'Code39x' | 'Code49' | 'Code93x' | 'DataMatrix' | 'EAN_13' | 'EAN_8' | 'EAN128FNC1'
	| 'GS1QRCode' | 'HIBCCode128' | 'HIBCCode39' | 'IATA_2_of_5' | 'IntelligentMail' | 'IntelligentMailPackage' | 'ISBN' | 'ISMN' | 'ISSN'
	| 'ITF14' | 'JapanesePostal' | 'Matrix_2_of_5' | 'MaxiCode' | 'MicroPDF417' | 'MicroQRCode' | 'MSI' | 'Pdf417' | 'Pharmacode' | 'Plessey'
	| 'PostNet' | 'PZN' | 'QRCode' | 'RM4SCC' | 'RSS14' | 'RSS14Stacked' | 'RSS14StackedOmnidirectional' | 'RSS14Truncated' | 'RSSExpanded'
	| 'RSSExpandedStacked' | 'RSSLimited' | 'SSCC_18' | 'Telepen' | 'UCCEAN128' | 'UPC_A' | 'UPC_E0' | 'UPC_E1';

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

type ViewerSettings = {
	/** Host element's **id** to render Viewer to */
	element: string;

	/** Application title passed by Designer */
	applicationTitle: string;

	/** Information on the document to-be-previewed */
	documentInfo: {
		/** Document id */
		id: string;

		/** Document content in JSON format that can be useful for viewers with in-browser rendering. */
		content: unknown;

		/** Document name */
		name: string;

		/** Specifies whether the document to-be-previewed is an existing document saved on server side. */
		temporary: boolean;

		/** Specifies preferred rendering format for the document */
		preferredFormat: 'html' | 'svg';
	};
};

type CreateDocumentOptions = {
	/**
	 * Name of the document. If not specified default 'Untitled' name will be used
	 */
	name?: string;

	/**
	 * Type of the document to create. If not specified RDL report will be created
	 */
	type?: SupportedDocumentType;

	/**
	 * Template to use for the document
	 */
	template?: DocumentTemplate;

	/**
	 * A list of RDL Data Sets to use with the template
	 *
	 * **NOTE:** This won't work with RPX reports
	 */
	dataSetsInfo?: {
		/** data set id */
		id: string;

		/** data set name */
		name: string;
	}[];
};

type CreateDocumentInfo = {
	/**
	 * Document type
	 */
	type: SupportedDocumentType;

	/**
	 * Name of the document
	 */
	name: string;

	/**
	 * Document template
	 */
	template?: DocumentTemplate;

	/**
	 * undefined in onBefore**** handlers.
	 * Should be defined in onAfter****
	 */
	success?: boolean;
};

type CurrentDocumentInfo = {
	/**
	 * Document id
	 *
	 * If an existing report is edited, **id** is defined.\
	 * Otherwise, if a new report is edited, **id** is **null**.
	 */
	id: string | null;

	/** Document name */
	name: string;

	/**
	 * Document type
	 */
	type: SupportedDocumentType;
};

type DocumentTemplate = {
	/** Document template id */
	id?: string;

	/** Document template content in JSON format that can be useful in case you would like to create a non-empty new report. */
	content?: unknown;
};

type OpenDocumentOptions = {
	/** template info - if it is specified for report creation, either **templateInfo.id** or **templateinfo.content** needs to be defined */
	templateInfo?: DocumentTemplate;

	/**
	 * A list of RDL Data Sets to use with the template
	 *
	 * **NOTE:** This won't work with RPX reports
	 */
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
	 * Type of the document to create. If not specified RDL report will be created
	 */
	type?: SupportedDocumentType;
};

type SaveDocumentInfo = {
	/**
	 * Type of the document
	 */
	type: SupportedDocumentType;

	/**
	 * If an existing document is to be overwritten on saving,
	 * the correct id should be specified explicitly
	 */
	id?: string;

	/**
	  * The correct name must be specified explicitly
	  */
	name: string;

	/**
	  * Indicates that a new document is being saved for the first time
	  */
	isFirstSave: boolean;

	/**
	  * undefined in onBefore**** handlers.
	  * Should be defined in onAfter****
	  */
	success?: boolean;
};

type OpenDocumentInfo = {
	/**
	 * Document type
	 */
	type: SupportedDocumentType;

	/**
	 * Document id
	 */
	id: string;

	/**
	 * Document name
	 */
	name: string;

	/**
	 * undefined in onBefore**** handlers.
	 * Should be defined in onAfter****
	 */
	success?: boolean;
};

type ReportPartsSettings = {
	enabled?: boolean;

	/**
	 * List of initially available for user libraries
	 * */
	libraries?: Array<{
		name: string,
		path: string
	}>
};
