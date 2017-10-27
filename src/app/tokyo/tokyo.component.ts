import { Component } from '@angular/core';

import { Notice } from '../notice/notice';

@Component({
  selector: 'tokyo',
  templateUrl: './tokyo.component.html',
  styleUrls: ['./tokyo.component.css']
})
export class TokyoComponent {

  selectedNotice: Notice;

  constructor() { }

  onSelectedHandler(notice: Notice) {
    this.selectedNotice = notice;
    console.log(notice);
  }

}
