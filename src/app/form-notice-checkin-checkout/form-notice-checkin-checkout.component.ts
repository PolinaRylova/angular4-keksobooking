import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-notice-checkin-checkout',
  templateUrl: './form-notice-checkin-checkout.component.html',
  styleUrls: ['./form-notice-checkin-checkout.component.css']
})
export class FormNoticeCheckinCheckoutComponent implements OnInit {

  times: string[] = ['12:00', '13:00', '14:00'];

  constructor() { }

  ngOnInit() {
  }

}
