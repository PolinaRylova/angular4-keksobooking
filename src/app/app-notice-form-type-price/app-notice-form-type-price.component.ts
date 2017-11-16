import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notice-form-type-price',
  templateUrl: './app-notice-form-type-price.component.html',
  styleUrls: ['./app-notice-form-type-price.component.css']
})
export class AppNoticeFormTypePriceComponent implements OnInit {

  @ViewChild('typeSelect') typeSelect: ElementRef;
  selectedIndex: number;
  minPrice: number;
  maxPrice = 1000000;

  constructor() { }

  ngOnInit() {
    this.selectedIndex = this.typeSelect.nativeElement.selectedIndex;
    this.switchMinPrice(this.selectedIndex);
  }

  switchMinPrice(selectedIndex) {
    switch (selectedIndex) {
      case 0:
        this.minPrice = 1000;
        break;
      case 1:
        this.minPrice = 0;
        break;
      case 2:
        this.minPrice = 10000;
        break;
      case 3:
        this.minPrice = 50000;
        break;
    }
  }

  saveSelectedIndex(selectedValue) {
    this.selectedIndex = selectedValue;
    this.switchMinPrice(this.selectedIndex);
  }
}
