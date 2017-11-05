import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgStyle } from '@angular/common';

import { Notice } from '../app-notice/notice';

@Component({
  selector: 'tokyo-pin-map',
  templateUrl: './tokyo-pin-map.component.html',
  styleUrls: ['./tokyo-pin-map.component.css']
})
export class TokyoPinMapComponent {

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
