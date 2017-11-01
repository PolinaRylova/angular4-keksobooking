import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { NgStyle } from '@angular/common';

import { Notice } from '../notice/notice';
import { NoticeService } from '../notice/notice.service';

@Component({
  selector: 'tokyo-pin-map',
  templateUrl: './tokyo-pin-map.component.html',
  styleUrls: ['./tokyo-pin-map.component.css']
})
export class TokyoPinMapComponent implements OnInit {

  notices: Notice[] = [];

  @Output() selectedEmitter = new EventEmitter<Notice>();
  @Input() selectedNotice: Notice;

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getNotices()
      .then(notices => {
        this.notices = notices.slice(0, 3);
        this.selectedNotice = notices[0];
        this.selectedEmitter.emit(notices[0]);
      });
  }

  selectPin(notice: Notice, event) {
    event.stopPropagation();
    this.selectedNotice = notice;
    console.log("Событие клика по пину произошло");
    this.selectedEmitter.emit(notice);
  }

  showFilteredNoticesHandler(filteredNotices) {
    this.notices = filteredNotices;
    this.selectedNotice = filteredNotices[0];
    this.selectedEmitter.emit(filteredNotices[0]);
  }

}
