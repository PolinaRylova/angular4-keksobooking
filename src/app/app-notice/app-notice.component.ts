import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Coordinates } from '../shared/coordinates.model';

@Component({
  selector: 'app-notice',
  templateUrl: './app-notice.component.html',
  styleUrls: ['./app-notice.component.css']
})
export class AppNoticeComponent {

  @Input() mainPinCoordinates: Coordinates;
  @Output() inputCoordinatesEmitter = new EventEmitter<Coordinates>();

  constructor() { }
  inputCoordinatesHandler(inputCoordinates: Coordinates) {
    this.inputCoordinatesEmitter.emit(inputCoordinates);
  }

}
