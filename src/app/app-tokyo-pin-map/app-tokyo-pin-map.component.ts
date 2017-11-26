import { Component, OnInit, ElementRef, Renderer2, ViewChild, EventEmitter, Input, Output, DoCheck } from '@angular/core';

import { NgStyle } from '@angular/common';

import { Notice } from '../shared/notice.model';
import { Coordinates } from '../shared/coordinates.model';
import {DomElementSize} from '../shared/dom-element-size.model';


@Component({
  selector: 'app-tokyo-pin-map',
  templateUrl: './app-tokyo-pin-map.component.html',
  styleUrls: ['./app-tokyo-pin-map.component.css']
})
export class AppTokyoPinMapComponent implements OnInit, DoCheck {

  @ViewChild('mainPin') mainPin: ElementRef;
  @Input() notices: Notice[];
  @Input() selectedNotice: Notice;
  @Input() inputMainPinCoordinates: Coordinates;
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
  mouseMoveListenFunction: Function;

  constructor(private renderer: Renderer2) { }
  ngOnInit() {
    this.mainPinCoordinatesEmitter.emit({
      x: this.mainPinDefLoc.x + this.mainPinSize.width / 2,
      y: this.mainPinDefLoc.y + this.mainPinSize.height
    });
  }
  ngDoCheck() {
    if (this.inputMainPinCoordinates.x !== undefined && this.inputMainPinCoordinates.y !== undefined) {
      this.mainPinDefLoc.x = this.inputMainPinCoordinates.x - this.mainPinSize.width / 2;
      this.mainPinDefLoc.y = this.inputMainPinCoordinates.y - this.mainPinSize.height;
      this.inputMainPinCoordinates.x = undefined;
      this.inputMainPinCoordinates.y = undefined;
    }
  }

  selectPin(notice: Notice, event) {
    event.stopPropagation();
    this.selectedEmitter.emit(notice);
  }

  mouseDownHandler(event: MouseEvent) {
    this.startCoordinates.x = event.clientX;
    this.startCoordinates.y = event.clientY;
    this.mouseMoveListenFunction = this.renderer.listen(this.mainPin.nativeElement, 'mousemove', (evt) => {
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
    console.log('Зашёл в shiftMainPin');
    this.mainPinDefLoc.x = this.mainPinDefLoc.x - this.shiftCoordinates.x;
    this.mainPinDefLoc.y = this.mainPinDefLoc.y - this.shiftCoordinates.y;
    this.mainPinCoordinatesEmitter.emit({
      x: this.mainPinDefLoc.x + this.mainPinSize.width / 2,
      y: this.mainPinDefLoc.y + this.mainPinSize.height
    });
  }

  mouseUpHandler(event) {
    event.preventDefault();
    this.mouseMoveListenFunction();
  }
}
