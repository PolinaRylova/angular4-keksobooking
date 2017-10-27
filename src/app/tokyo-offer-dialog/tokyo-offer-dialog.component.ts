import { Component, Input } from '@angular/core';

import { Notice } from '../notice/notice';

@Component({
  selector: 'tokyo-offer-dialog',
  templateUrl: './tokyo-offer-dialog.component.html',
  styleUrls: ['./tokyo-offer-dialog.component.css']
})
export class TokyoOfferDialogComponent {

  @Input() selectedNotice: Notice;

  constructor() { }

}
