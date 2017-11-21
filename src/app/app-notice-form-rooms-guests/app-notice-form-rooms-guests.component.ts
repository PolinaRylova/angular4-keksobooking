import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notice-form-rooms-guests',
  templateUrl: './app-notice-form-rooms-guests.component.html',
  styleUrls: ['./app-notice-form-rooms-guests.component.css']
})
export class AppNoticeFormRoomsGuestsComponent implements OnInit {

  @ViewChild('roomsSelect') roomsSelect: ElementRef;
  roomsParams = [
    {
      value: 1,
      text: '1 комната',
    },
    {
      value: 2,
      text: '2 комнаты',
    },
    {
      value: 3,
      text: '3 комнаты',
    },
    {
      value: 100,
      text: '100 комнат',
    }
  ];

  guestsParams = [
    {
      value: 3,
      text: 'для 3 гостей',
      disabled: true,
      selected: false
    },
    {
      value: 2,
      text: 'для 2 гостей',
      disabled: true,
      selected: false
    },
    {
      value: 1,
      text: 'для 1 гостя',
      disabled: false,
      selected: true
    },
    {
      value: 0,
      text: 'не для гостей',
      disabled: true,
      selected: false
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  saveSelectedIndex(selectedIndex) {
    switch (selectedIndex) {
      case 0:
        this.activateGuestsOptions([1]);
        break;
      case 1:
        this.activateGuestsOptions([1, 2]);
        break;
      case 2:
        this.activateGuestsOptions([1, 2, 3]);
        break;
      case 3:
        this.activateGuestsOptions([0]);
        break;
    }
  }

  activateGuestsOptions(valueArray: number[]) {
    this.guestsParams.forEach(function (objectItem) {
      objectItem.disabled = true;
      objectItem.selected = false;
    });
    this.guestsParams.forEach(function (objectItem, index) {
      valueArray.forEach(function (value) {
        if (objectItem.value === value) {
          objectItem.disabled = false;
          objectItem.selected = true;
        }
      });
    });
  }
}
