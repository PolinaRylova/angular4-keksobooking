import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { NgStyle } from '@angular/common';

import { Notice } from '../notice/notice';
import { NoticeService } from '../notice/notice.service';

@Component({
  selector: 'tokyo-pin-map',
  templateUrl: './tokyo-pin-map.component.html',
  styleUrls: ['./tokyo-pin-map.component.css']
})
export class TokyoPinMapComponent implements OnInit {

  @Output() onSelectedEmitter = new EventEmitter<Notice>();

  notices: Notice[] = [];
  selectedNotice: Notice;

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getNotices()
      .then(notices => {
        this.notices = notices.slice(0, 3);
        this.selectedNotice = notices[0];
        this.onSelectedEmitter.emit(notices[0]);
      });
  }

  onSelect(notice: Notice) {
    this.selectedNotice = notice;
    this.onSelectedEmitter.emit(notice);
  }
}
