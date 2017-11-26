import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Notice } from '../shared/notice.model';
import { Coordinates } from '../shared/coordinates.model';

@Component({
  selector: 'app-notice-form',
  templateUrl: './app-notice-form.component.html',
  styleUrls: ['./app-notice-form.component.css']
})
export class AppNoticeFormComponent {

  @Input() mainPinCoordinates: Coordinates;
  @Output() inputCoordinatesEmitter = new EventEmitter<Coordinates>();

  constructor() { }

  inputCoordinatesHandler(inputCoordinates: Coordinates) {
    this.inputCoordinatesEmitter.emit(inputCoordinates);
  }

  noticeFormSubmitHandler(event) {
    console.log(event);
  }

  noticeFormEnterHandler(event) {
    console.log(event);
  }
}
