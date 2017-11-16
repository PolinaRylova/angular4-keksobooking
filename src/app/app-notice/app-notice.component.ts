import { Component, Input } from '@angular/core';

import { Coordinates } from '../shared/coordinates.model';

@Component({
  selector: 'app-notice',
  templateUrl: './app-notice.component.html',
  styleUrls: ['./app-notice.component.css']
})
export class AppNoticeComponent {

  @Input() mainPinCoordinates: Coordinates;

  constructor() { }

}
