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

  selectedHandler(notice: Notice) {
    this.selectedNotice = notice;
  }

  deselectNotice() {
    this.selectedNotice = null;
    console.log('Событие клика по фоновой картинке tokyo произошло, полю tokyo компонента selectedNotice присвоено значение ' + this.selectedNotice);
  }
}
