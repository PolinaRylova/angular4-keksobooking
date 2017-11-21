import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-form-checkin-checkout',
  templateUrl: './app-notice-form-checkin-checkout.component.html',
  styleUrls: ['./app-notice-form-checkin-checkout.component.css']
})
export class AppNoticeFormCheckinCheckoutComponent implements OnInit {

  times = [
    {
      value: '12:00',
      text: 12,
      selected: true
    },
    {
      value: '13:00',
      text: 13,
      selected: false
    },
    {
      value: '14:00',
      text: 14,
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeTimeHandler(value) {
    this.times.forEach(function (item) {
      if (item.value === value) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
  }
}
