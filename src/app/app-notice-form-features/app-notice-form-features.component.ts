import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-form-features',
  templateUrl: './app-notice-form-features.component.html',
  styleUrls: ['./app-notice-form-features.component.css']
})
export class AppNoticeFormFeaturesComponent implements OnInit {

  features: string[] = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  constructor() { }

  ngOnInit() {
  }

}
