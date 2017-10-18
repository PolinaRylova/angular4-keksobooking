import { Component, OnInit } from '@angular/core';

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
  selectedNotice: Notice;

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getNotices()
      .then(notices => this.notices = notices);
  }

  onSelect(notice: Notice): void {
    this.selectedNotice = notice;
  }

}
