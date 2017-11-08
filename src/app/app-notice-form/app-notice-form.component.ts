import { Component, Input } from '@angular/core';

import { Coordinates } from '../shared/coordinates';

@Component({
  selector: 'app-notice-form',
  templateUrl: './app-notice-form.component.html',
  styleUrls: ['./app-notice-form.component.css']
})
export class AppNoticeFormComponent {

  @Input() mainPinCoordinates: Coordinates;

  constructor() { }

}
