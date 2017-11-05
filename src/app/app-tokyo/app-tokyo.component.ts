import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Notice } from '../app-notice/notice';
import { NoticeService } from '../app-notice/notice.service';

@Component({
  selector: 'app-tokyo',
  templateUrl: './app-tokyo.component.html',
  styleUrls: ['./app-tokyo.component.css']
})
export class AppTokyoComponent implements OnInit {

  noticesFromServer: Notice[];
  noticesToShow: Notice[];
  selectedNotice: Notice;

  @Output() selectedEmitter = new EventEmitter<Notice>();

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getNotices()
      .then(notices => {
        this.noticesFromServer = notices;
        this.noticesToShow = notices.slice(0, 3);
        this.selectedNotice = this.noticesToShow[0];
        this.selectedEmitter.emit(this.noticesToShow[0]);
      });
  }

  selectedHandler(notice: Notice) {
    this.selectedNotice = notice;
  }

  filteredNoticesHandler(newNotices) {
    this.noticesToShow = newNotices;
    this.selectedNotice = newNotices[0];
    this.selectedEmitter.emit(newNotices[0]);
  }

  deselectNotice() {
    this.selectedNotice = null;
  }
}