import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

import { Notice } from '../shared/notice.model';
import { NoticeService } from '../shared/notice.service';

@Component({
  selector: 'app-tokyo',
  templateUrl: './app-tokyo.component.html',
  styleUrls: ['./app-tokyo.component.css']
})
export class AppTokyoComponent implements OnInit {

  noticesFromServer: Notice[];
  noticesToShow: Notice[];
  selectedNotice: Notice;

  @Input() inputMainPinCoordinates: Coordinates;
  @Output() selectedEmitter = new EventEmitter<Notice>();
  @Output() mainPinCoordinatesEmitter = new EventEmitter<Coordinates>();

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

  mainPinCoordinatesHandler(coordinates) {
    this.mainPinCoordinatesEmitter.emit(coordinates);
  }

  deselectNotice() {
    this.selectedNotice = null;
  }
}
