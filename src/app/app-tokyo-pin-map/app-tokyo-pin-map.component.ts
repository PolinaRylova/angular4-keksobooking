import {Component, AfterViewInit, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

import { NgStyle } from '@angular/common';

import { Notice } from '../shared/notice';

import { Coordinates } from '../shared/coordinates';

@Component({
  selector: 'app-tokyo-pin-map',
  templateUrl: './app-tokyo-pin-map.component.html',
  styleUrls: ['./app-tokyo-pin-map.component.css']
})
export class AppTokyoPinMapComponent implements AfterViewInit {

  @ViewChild('mainPin') el: ElementRef;
  @Input() notices: Notice[];
  @Input() selectedNotice: Notice;
  @Output() selectedEmitter = new EventEmitter<Notice>();
  @Output() defaultCoordinatesEmitter = new EventEmitter<Coordinates>();

  mainPinCoordinates: Coordinates = new Coordinates();

  constructor() { }
  ngAfterViewInit() {
    this.mainPinCoordinates.x = this.el.nativeElement.offsetLeft + this.el.nativeElement.offsetWidth / 2;
    this.mainPinCoordinates.y = this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight;
    this.defaultCoordinatesEmitter.emit(this.mainPinCoordinates);
  }

  selectPin(notice: Notice, event) {
    event.stopPropagation();
    this.selectedEmitter.emit(notice);
  }

}
