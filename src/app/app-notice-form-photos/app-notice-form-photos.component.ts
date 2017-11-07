import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-form-photos',
  templateUrl: './app-notice-form-photos.component.html',
  styleUrls: ['./app-notice-form-photos.component.css']
})
export class AppNoticeFormPhotosComponent implements OnInit {

  formPhotos: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'];

  constructor() { }

  ngOnInit() {
  }

}
