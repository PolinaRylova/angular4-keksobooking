import { Component } from '@angular/core';

@Component({
  selector: 'app-notice-header',
  templateUrl: './app-notice-header.component.html',
  styleUrls: ['./app-notice-header.component.css']
})
export class AppNoticeHeaderComponent {
  preview = {
    src: '../assets/img/muffin.png',
    width: 40,
    height: 44
  }

  constructor() { }

  avatarLoadHandler(url) {
    this.preview.src = url;
    this.preview.width = 70;
    this.preview.height = 70;
  }
}
