import { Component, OnInit, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Coordinates } from '../shared/coordinates.model';

@Component({
  selector: 'app-notice-form-address',
  templateUrl: './app-notice-form-address.component.html',
  styleUrls: ['./app-notice-form-address.component.css']
})
export class AppNoticeFormAddressComponent implements OnInit, DoCheck {

  @Input() mainPinCoordinates: Coordinates;
  @Output() inputCoordinatesEmitter = new EventEmitter<Coordinates>();
  address: string;

  constructor() { }

  ngOnInit() {
    this.address = 'x: ' + this.mainPinCoordinates.x + ', y: ' + this.mainPinCoordinates.y;
  }

  ngDoCheck() {
    this.address = 'x: ' + this.mainPinCoordinates.x + ', y: ' + this.mainPinCoordinates.y;
  }

  inputHandler(event) {
    const inputStringArr: string[] = event.target.value.replace(',', '').split(' ');
    // Вычленяем элементы строки с координатами x и y и приводим к числу
    // Передаём координаты метки в соответствии с введенными значениями
    this.inputCoordinatesEmitter.emit({
      x: +(inputStringArr[1]),
      y: +(inputStringArr[3])
    });
  }
}
