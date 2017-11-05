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

  selectFilters = [
    {
      'name': 'htypes',
      'options': [
        {
          'key': 'any',
          'value': 'Любой тип жилья'
        },
        {
          'key': 'flat',
          'value': 'Квартира'
        },
        {
          'key': 'house',
          'value': 'Дом'
        },
        {
          'key': 'bungalo',
          'value': 'Сарай'
        }
      ]
    },
    {
      'name': 'hprices',
      'options': [
        {
          'key': 'any',
          'value': 'Любая'
        },
        {
          'key': 'middle',
          'value': '10000 - 50000 ₽'
        },
        {
          'key': 'low',
          'value': 'до 10000 ₽'
        },
        {
          'key': 'high',
          'value': 'от 50000 ₽'
        }
      ]
    },
    {
      'name': 'hrooms',
      'options': [
        {
          'key': 'any',
          'value': 'Любое число комнат'
        },
        {
          'key': '1',
          'value': 'Одна комната'
        },
        {
          'key': '2',
          'value': 'Две комнаты'
        },
        {
          'key': '3',
          'value': 'Три комнаты'
        }
      ]
    },
    {
      'name': 'hguests',
      'options': [
        {
          'key': 'any',
          'value': 'Любое число гостей'
        },
        {
          'key': '1',
          'value': 'Один гость'
        },
        {
          'key': '2',
          'value': 'Два гостя'
        }
      ]
    }
  ];

  filterSet = [
    {
      'name': 'wifi',
      'checked': false
    },
    {
      'name': 'dishwasher',
      'checked': false
    },
    {
      'name': 'parking',
      'checked': false
    },
    {
      'name': 'washer',
      'checked': false
    },
    {
      'name': 'elevator',
      'checked': false
    },
    {
      'name': 'conditioner',
      'checked': false
    }
  ];

  constructor() { }

  saveFilterValues(event) {
    const filterValue: any = event.target.value;

    switch (event.target.id) {
      case 'htypes':
        this.housingType = filterValue;
        break;
      case 'hprices':
        this.housingPrice = filterValue;
        break;
      case 'hrooms':
        this.housingRooms = filterValue;
        break;
      case 'hguests':
        this.housingGuests = filterValue;
        break;
      case 'wifi':
      case 'dishwasher':
      case 'parking':
      case 'washer':
      case 'elevator':
      case 'conditioner':
        this.filterSet.forEach(function (object) {
          if (object.name === event.target.id) {
            object.checked = !object.checked;
          }
        });
        break;
    }

    this.filterNotices();
  }

  filterNotices() {
    const filteredNotices = this.notices.filter(notice => { return this.isNeedShow(notice); }); // фильтруем
    this.filteredNoticesEmitter.emit(filteredNotices);  // испускаем событие и передаем отфильтрованные нотисы
  }

  isNeedShow(notice) {
    return this.checkSelectValue(this.housingType, notice.offer.type) &&
    this.checkSelectValue(this.housingRooms, notice.offer.rooms) &&
    this.checkSelectValue(this.housingGuests, notice.offer.guests) &&
    this.checkPriceInDiapason(this.housingPrice, notice.offer.price) &&
    this.checkCheckedValue(this.filterSet[0], notice.offer.features) &&
    this.checkCheckedValue(this.filterSet[1], notice.offer.features) &&
    this.checkCheckedValue(this.filterSet[2], notice.offer.features) &&
    this.checkCheckedValue(this.filterSet[3], notice.offer.features) &&
    this.checkCheckedValue(this.filterSet[4], notice.offer.features) &&
    this.checkCheckedValue(this.filterSet[5], notice.offer.features);
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
