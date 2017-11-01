import { Component } from '@angular/core';

@Component({
  selector: 'house-price',
  templateUrl: './house-price.component.html',
  styleUrls: ['./house-price.component.css']
})
export class HousePriceComponent {

  housePrice = [
    {
      "key": "any",
      "value": "Любая"
    },
    {
      "key": "middle",
      "value": "10000 - 50000"
    },
    {
      "key": "low",
      "value": "до 10000"
    },
    {
      "key": "high",
      "value": "от 50000"
    }
  ];

  constructor() { }

}
