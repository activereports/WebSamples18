import { Component, Input, ViewEncapsulation } from '@angular/core';
import { JSViewer, createViewer} from '@mescius/activereportsnet-viewer';

@Component({
  selector: 'report-viewer',
  templateUrl: './report-viewer.component.html',
  styleUrls: [
      './report-viewer.component.css',
      '../../../node_modules/@mescius/activereportsnet-viewer/dist/jsViewer.min.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ReportViewerComponent {
  private viewer: JSViewer | null = null;

  @Input() set reportId(reportId: string) {
      if (!this.viewer) {
          this.viewer = createViewer({
              element: '#viewerPlaceHolder'
          });
      }

      this.viewer.openReport(reportId);
  }
}
