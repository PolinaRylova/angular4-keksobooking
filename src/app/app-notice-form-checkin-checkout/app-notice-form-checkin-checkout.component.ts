import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-form-checkin-checkout',
  templateUrl: './app-notice-form-checkin-checkout.component.html',
  styleUrls: ['./app-notice-form-checkin-checkout.component.css']
})
export class AppNoticeFormCheckinCheckoutComponent implements OnInit {

  times: string[] = ['12:00', '13:00', '14:00'];

  constructor() { }

  ngOnInit() {
  }

}
