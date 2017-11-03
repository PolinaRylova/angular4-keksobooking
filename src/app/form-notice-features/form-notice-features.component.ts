import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-notice-features',
  templateUrl: './form-notice-features.component.html',
  styleUrls: ['./form-notice-features.component.css']
})
export class FormNoticeFeaturesComponent implements OnInit {

  features: string[] = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];

  constructor() { }

  ngOnInit() {
  }

}
