import { Component, Input } from '@angular/core';

import { Coordinates } from '../shared/coordinates';

@Component({
  selector: 'app-notice-form-address',
  templateUrl: './app-notice-form-address.component.html',
  styleUrls: ['./app-notice-form-address.component.css']
})
export class AppNoticeFormAddressComponent {

  @Input() mainPinCoordinates: Coordinates;

  constructor() { }

}
