import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgSwitchCase, NgSwitchDefault } from '@angular/common';

import { Notice } from '../app-notice/notice';

@Component({
  selector: 'app-tokyo-offer-dialog',
  templateUrl: './app-tokyo-offer-dialog.component.html',
  styleUrls: ['./app-tokyo-offer-dialog.component.css']
})
export class AppTokyoOfferDialogComponent {

  @Input() selectedNotice: Notice;
  @Output() hideDialogEmitter = new EventEmitter<Notice>();

  constructor() { }

  hideDialog() {
    this.hideDialogEmitter.emit();
  }

  getRusLodgeType(type: string) {
    let rusLodgeType: string;
    switch (type) {
      case 'flat':
        rusLodgeType = 'Квартира';
        break;
      case 'house':
        rusLodgeType = 'Дом';
        break;
      case 'bungalo':
        rusLodgeType = 'Сарай';
        break;
      default:
        rusLodgeType = 'Тип не указан';
    }
    return rusLodgeType;
  };

}
