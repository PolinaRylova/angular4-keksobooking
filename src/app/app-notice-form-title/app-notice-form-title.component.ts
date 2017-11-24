import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notice-form-title',
  templateUrl: './app-notice-form-title.component.html',
  styleUrls: ['./app-notice-form-title.component.css']
})
export class AppNoticeFormTitleComponent {

  title: string;
  constructor() {
  }

  changeTitleValue(value) {
    console.log(value);
  }
}
