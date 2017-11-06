import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgStyle } from '@angular/common';

import { Notice } from '../app-notice/notice';

@Component({
  selector: 'app-tokyo-pin-map',
  templateUrl: './app-tokyo-pin-map.component.html',
  styleUrls: ['./app-tokyo-pin-map.component.css']
})
export class AppTokyoPinMapComponent {

  @Input() notices: Notice[];
  @Input() selectedNotice: Notice;

  @Output() selectedEmitter = new EventEmitter<Notice>();

  constructor() { }

  selectPin(notice: Notice, event) {
    event.stopPropagation();
    this.selectedNotice = notice;
    this.selectedEmitter.emit(notice);
  }

}
