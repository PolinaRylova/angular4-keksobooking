import { Component, Input } from '@angular/core';

import { Coordinates } from '../shared/coordinates.model';

@Component({
  selector: 'app-notice-form-right-panel',
  templateUrl: './app-notice-form-right-panel.component.html',
  styleUrls: ['./app-notice-form-right-panel.component.css']
})
export class AppNoticeFormRightPanelComponent {

  @Input() mainPinCoordinates: Coordinates;

  constructor() { }

}
