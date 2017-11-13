import {Component, OnInit, ElementRef, Renderer2, ViewChild, EventEmitter, Input, Output} from '@angular/core';

import { NgStyle } from '@angular/common';

import { Notice } from '../shared/notice';
import { Coordinates } from '../shared/coordinates';
import {DomElementSize} from '../shared/dom-element-size';

@Component({
  selector: 'app-tokyo-pin-map',
  templateUrl: './app-tokyo-pin-map.component.html',
  styleUrls: ['./app-tokyo-pin-map.component.css']
})
export class AppTokyoPinMapComponent implements OnInit {

  @ViewChild('mainPin') mainPin: ElementRef;
  @Input() notices: Notice[];
  @Input() selectedNotice: Notice;
  @Output() selectedEmitter = new EventEmitter<Notice>();
  @Output() mainPinCoordinatesEmitter = new EventEmitter<Coordinates>();

  mainPinDefLoc: Coordinates = {
    x: 600,
    y: 300
  };
  mainPinSize: DomElementSize = {
    width: 75,
    height: 94
  };
  startCoordinates = new Coordinates();
  shiftCoordinates = new Coordinates();
  listenFunction: Function;

  constructor(private renderer: Renderer2) { }
  ngOnInit() {
    this.mainPinCoordinatesEmitter.emit({
      x: this.mainPinDefLoc.x + this.mainPinSize.width / 2,
      y: this.mainPinDefLoc.y + this.mainPinSize.height
    });
  }

  selectPin(notice: Notice, event) {
    event.stopPropagation();
    this.selectedEmitter.emit(notice);
  }

  mouseDownHandler(event: MouseEvent) {
    this.startCoordinates.x = event.clientX;
    this.startCoordinates.y = event.clientY;
    this.listenFunction = this.renderer.listen(this.mainPin.nativeElement, 'mousemove', (evt) => {
      this.mouseMoveHandler(evt);
    });
  }

  mouseMoveHandler(event: MouseEvent) {
    event.preventDefault();
    this.shiftCoordinates.x = this.startCoordinates.x - event.clientX;
    this.shiftCoordinates.y = this.startCoordinates.y - event.clientY;
    this.startCoordinates.x = event.clientX;
    this.startCoordinates.y = event.clientY;
    this.shiftMainPin();
  }

  shiftMainPin() {
    this.mainPinDefLoc.x = this.mainPinDefLoc.x - this.shiftCoordinates.x;
    this.mainPinDefLoc.y = this.mainPinDefLoc.y - this.shiftCoordinates.y;
    this.mainPinCoordinatesEmitter.emit({
      x: this.mainPinDefLoc.x + this.mainPinSize.width / 2,
      y: this.mainPinDefLoc.y + this.mainPinSize.height
    });
  }

  mouseUpHandler(event) {
    event.preventDefault();
    this.listenFunction();
  }
}
