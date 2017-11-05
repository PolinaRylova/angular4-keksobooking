import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Notice } from '../app-notice/notice';

@Component({
  selector: 'tokyo-filters',
  templateUrl: './tokyo-filters.component.html',
  styleUrls: ['./tokyo-filters.component.css']
})

export class TokyoFiltersComponent {

  @Input() notices: Notice[];
  @Output() filteredNoticesEmitter = new EventEmitter<Notice[]>();

  housingType: string = 'any';
  housingPrice: string = 'any';
  housingRooms: any = 'any';
  housingGuests: any = 'any';
  wifi = {
    'name': 'wifi',
    'checked': false
  };
  dishwasher = {
    'name': 'dishwasher',
    "checked": false
  };
  parking = {
    'name': 'parking',
    'checked': false
  };
  washer = {
    'name': 'washer',
    'checked': false
  };
  elevator = {
    'name': 'elevator',
    'checked': false
  };
  conditioner = {
    'name': 'conditioner',
    'checked': false
  };

  constructor() { }

  saveFilterValues(event) {
    let filterValue: any = event.target.value;
    if (event.target.id) {
      switch (event.target.id) {
        case 'housing_type':
          this.housingType = filterValue;
          break;
        case 'housing_price':
          this.housingPrice = filterValue;
          break;
        case 'housing_rooms':
          this.housingRooms = filterValue;
          break;
        case 'housing_guests':
          this.housingGuests = filterValue;
          break;
      }
    } else {
      switch (event.target.value) {
        case 'wifi':
          this.wifi.checked = true;
          break;
        case 'dishwasher':
          this.dishwasher.checked = true;
          break;
        case 'parking':
          this.parking.checked = true;
          break;
        case 'washer':
          this.washer.checked = true;
          break;
        case 'elevator':
          this.elevator.checked = true;
          break;
        case 'conditioner':
          this.conditioner.checked = true;
          break;
      }
    }

    this.filterNotices();
  }

  filterNotices() {
    let filteredNotices = this.notices.filter(notice => { return this.isNeedShow(notice); }); // фильтруем
    this.filteredNoticesEmitter.emit(filteredNotices);  // испускаем событие и передаем отфильтрованные нотисы
  }

  isNeedShow(notice) {
    return this.checkSelectValue(this.housingType, notice.offer.type) &&
    this.checkSelectValue(this.housingRooms, notice.offer.rooms) &&
    this.checkSelectValue(this.housingGuests, notice.offer.guests) &&
    this.checkPriceInDiapason(this.housingPrice, notice.offer.price) &&
    this.checkCheckedValue(this.wifi, notice.offer.features) &&
    this.checkCheckedValue(this.dishwasher, notice.offer.features) &&
    this.checkCheckedValue(this.parking, notice.offer.features) &&
    this.checkCheckedValue(this.washer, notice.offer.features) &&
    this.checkCheckedValue(this.elevator, notice.offer.features) &&
    this.checkCheckedValue(this.conditioner, notice.offer.features);
  }

  checkSelectValue(selectedValue, noticeParam) {
    let noticeStringParam = noticeParam.toString();
    if (selectedValue !== 'any') {
      if (selectedValue !== noticeStringParam) {
        return false;
      }
    }
    return true;
  }

  checkPriceInDiapason = function (selectedValue, noticeParam) {
    switch (selectedValue) {
      case 'any':
        return true;
      case 'middle':
        return (noticeParam <= 50000) && (noticeParam >= 10000);
      case 'low':
        return noticeParam < 10000;
      case 'high':
        return noticeParam > 50000;
      default:
        return false;
    }
  }

  checkCheckedValue(selectedValue, noticeParam) {
    if (selectedValue.checked) {
      if (noticeParam.indexOf(selectedValue.name) === -1) {
        return false;
      }
    }
    return true;
  }
}
