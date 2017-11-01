import { Component } from '@angular/core';

@Component({
  selector: 'house-rooms',
  templateUrl: './house-rooms.component.html',
  styleUrls: ['./house-rooms.component.css']
})
export class HouseRoomsComponent {

  houseRooms = [
    {
      "key": "any",
      "value": "Любое число комнат"
    },
    {
      "key": "1",
      "value": "Одна комната"
    },
    {
      "key": "2",
      "value": "Две комнаты"
    },
    {
      "key": "3",
      "value": "Три комнаты"
    }
  ];

  constructor() { }

}
