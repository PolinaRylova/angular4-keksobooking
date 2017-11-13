import {Component, OnInit, EventEmitter, Output, ElementRef, AfterViewInit} from '@angular/core';

import { Notice } from '../shared/notice';
import { NoticeService } from '../shared/notice.service';
import { DomElementSize } from '../shared/dom-element-size';

@Component({
  selector: 'app-tokyo',
  templateUrl: './app-tokyo.component.html',
  styleUrls: ['./app-tokyo.component.css']
})
export class AppTokyoComponent implements OnInit, AfterViewInit {

  noticesFromServer: Notice[];
  noticesToShow: Notice[];
  selectedNotice: Notice;

  mapSize = new DomElementSize();

  @Output() selectedEmitter = new EventEmitter<Notice>();
  @Output() mainPinCoordinatesEmitter = new EventEmitter<Coordinates>();
  @Output() mapSizeEmitter = new EventEmitter<DomElementSize>();

  constructor(private noticeService: NoticeService, private el: ElementRef) { }

  ngOnInit(): void {
    this.noticeService.getNotices()
      .then(notices => {
        this.noticesFromServer = notices;
        this.noticesToShow = notices.slice(0, 3);
        this.selectedNotice = this.noticesToShow[0];
        this.selectedEmitter.emit(this.noticesToShow[0]);
      });
  }

  ngAfterViewInit(): void {
    this.mapSize.width = this.el.nativeElement.offsetWidth;
    this.mapSize.height = this.el.nativeElement.offsetHeight;
    this.mapSizeEmitter.emit(this.mapSize);
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
