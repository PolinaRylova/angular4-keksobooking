import { Component } from '@angular/core';

import { Coordinates } from '../shared/coordinates';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent {

  mainPinCoordinates: Coordinates = new Coordinates();

  constructor() { }

  mainPinCoordinatesHandler(coordinates) {
    this.mainPinCoordinates.x = coordinates.x;
    this.mainPinCoordinates.y = coordinates.y;
  }

}
