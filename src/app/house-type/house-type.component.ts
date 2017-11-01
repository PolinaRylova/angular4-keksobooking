import { Component } from '@angular/core';

@Component({
  selector: 'house-type',
  templateUrl: './house-type.component.html',
  styleUrls: ['./house-type.component.css']
})
export class HouseTypeComponent {

  houseTypes = [
    {
      "key": "any",
      "value": "Любой тип жилья"
    },
    {
      "key": "flat",
      "value": "Квартира"
    },
    {
      "key": "house",
      "value": "Дом"
    },
    {
      "key": "bungalo",
      "value": "Сарай"
    }
  ];

  constructor() { }

}
