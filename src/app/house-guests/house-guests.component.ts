import { Component } from '@angular/core';

@Component({
  selector: 'house-guests',
  templateUrl: './house-guests.component.html',
  styleUrls: ['./house-guests.component.css']
})
export class HouseGuestsComponent {

  houseGuests = [
    {
      "key": "any",
      "value": "Любое число гостей"
    },
    {
      "key": "1",
      "value": "Один гость"
    },
    {
      "key": "2",
      "value": "Два гостя"
    }
  ];

  constructor() { }

}
