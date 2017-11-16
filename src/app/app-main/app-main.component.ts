import { Component } from '@angular/core';

import { Coordinates } from '../shared/coordinates.model';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent {

  mainPinCoordinates = new Coordinates();
  inputMainPinCoordinates = new Coordinates();

  constructor() { }

  mainPinCoordinatesHandler(coordinates) {
    this.mainPinCoordinates.x = coordinates.x;
    this.mainPinCoordinates.y = coordinates.y;
  }

  inputCoordinatesHandler(inputCoordinates: Coordinates) {
    this.inputMainPinCoordinates.x = inputCoordinates.x;
    this.inputMainPinCoordinates.y = inputCoordinates.y;
  }
}
