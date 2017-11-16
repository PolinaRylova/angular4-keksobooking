import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Coordinates } from '../shared/coordinates.model';

@Component({
  selector: 'app-notice-form-address',
  templateUrl: './app-notice-form-address.component.html',
  styleUrls: ['./app-notice-form-address.component.css']
})
export class AppNoticeFormAddressComponent {

  inputCoordinates = new Coordinates();
  @Input() mainPinCoordinates: Coordinates;
  @Output() inputCoordinatesEmitter = new EventEmitter<Coordinates>();

  constructor() { }

  inputHandler(event) {
    const inputStringArr: string[] = event.target.value.replace(',', '').split(' ');
    // Вычленяем элементы массива с координатами x и y и приводим к числу
    this.inputCoordinates.x = +(inputStringArr[1]);
    console.log(typeof this.inputCoordinates.x, this.inputCoordinates.x);
    this.inputCoordinates.y = +(inputStringArr[3]);
    console.log(typeof this.inputCoordinates.y, this.inputCoordinates.y);
    // Передаём координаты метки в соответствии с введенными значениями
    this.inputCoordinatesEmitter.emit(this.inputCoordinates);
  }
}
