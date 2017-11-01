import { Component,EventEmitter, Output } from '@angular/core';

import { Notice } from '../notice/notice';

@Component({
  selector: 'tokyo',
  templateUrl: './tokyo.component.html',
  styleUrls: ['./tokyo.component.css']
})
export class TokyoComponent {

  selectedNotice: Notice;

  @Output() showFilteredNoticesEmitter = new EventEmitter<Notice[]>();

  constructor() { }

  selectedHandler(notice: Notice) {
    this.selectedNotice = notice;
  }

  filteredNoticesHandler(filteredNotices) {
    this.selectedNotice = filteredNotices[0];
    this.showFilteredNoticesEmitter.emit(filteredNotices);
  }

  deselectNotice() {
    this.selectedNotice = null;
    console.log('Событие клика по фоновой картинке tokyo произошло, полю tokyo компонента selectedNotice присвоено значение ' + this.selectedNotice);
  }
}
