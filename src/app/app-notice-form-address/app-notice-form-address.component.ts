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

  inputHandler(event) {
    const inputStringArr = event.target.value.replace(',', '').split(' ');
    // Вычленяем элементы массива с координатами x и y и приводим к числу
    const inputedCoordX = Number(inputStringArr[1]);
    const inputedCoordY = Number(inputStringArr[3]);
    // Проверяем, чтобы вводимые значения не выходили за пределы карты
    if (inputedCoordX <= 1200 && inputedCoordY <= 660) {
      // Перемещаем метку в соответствии с введенными координатами и размером метки
      // pinMain.style.left = (inputedCoordX - pinMainWidth / 2) + 'px';
      // pinMain.style.top = (inputedCoordY - pinMainHeight) + 'px';
      console.log('Введены допустимые значения');
    } else {
      // В случае выхода вводимых значений за диапазон возможных
      // возвращаем метку и значение в поле по умолчанию
      // pinMain.style.left = (defaultPinMainCoords.x - pinMainWidth / 2) + 'px';
      // pinMain.style.top = (defaultPinMainCoords.y - pinMainHeight) + 'px';
      // addressField.value = 'x: ' + defaultPinMainCoords.x + ', y: ' + defaultPinMainCoords.y;
      console.log('Введены недопустимые значения');
    }
  }

}
