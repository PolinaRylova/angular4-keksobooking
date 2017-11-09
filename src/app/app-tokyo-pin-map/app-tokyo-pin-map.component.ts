import {Component, AfterViewInit, ElementRef, Renderer2, EventEmitter, Input, Output, ViewChild} from '@angular/core';

import { NgStyle } from '@angular/common';

import { Notice } from '../shared/notice';
import { Coordinates } from '../shared/coordinates';

@Component({
  selector: 'app-tokyo-pin-map',
  templateUrl: './app-tokyo-pin-map.component.html',
  styleUrls: ['./app-tokyo-pin-map.component.css']
})
export class AppTokyoPinMapComponent implements AfterViewInit {

  @ViewChild('mainPin') mainPin: ElementRef;
  @Input() notices: Notice[];
  @Input() selectedNotice: Notice;
  @Output() selectedEmitter = new EventEmitter<Notice>();
  @Output() mainPinCoordinatesEmitter = new EventEmitter<Coordinates>();

  mainPinLocation: Coordinates = {
    x: 600,
    y: 300
  };
  mainPinCoordinates: Coordinates = new Coordinates();
  startCoordinates: Coordinates = new Coordinates();
  shiftCoordinates: Coordinates = new Coordinates();
  listenFunction: Function;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.mainPinCoordinates.x = this.mainPinLocation.x + this.mainPin.nativeElement.offsetWidth / 2;
    this.mainPinCoordinates.y = this.mainPinLocation.y + this.mainPin.nativeElement.offsetHeight;
    this.mainPinCoordinatesEmitter.emit(this.mainPinCoordinates);
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
    this.mainPinLocation.x = this.mainPinLocation.x - this.shiftCoordinates.x;
    this.mainPinLocation.y = this.mainPinLocation.y - this.shiftCoordinates.y;
    this.mainPinCoordinates.x = this.mainPinLocation.x + this.mainPin.nativeElement.offsetWidth / 2;
    this.mainPinCoordinates.y = this.mainPinLocation.y + this.mainPin.nativeElement.offsetHeight;
    this.mainPinCoordinatesEmitter.emit(this.mainPinCoordinates);
  }

  mouseUpHandler(event) {
    event.preventDefault();
    this.listenFunction();
  }
}
