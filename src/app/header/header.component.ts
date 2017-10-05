import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'KEKSOBOOKING';
  subtitle = 'КЕКСЫ ПО СОСЕДСТВУ';

  constructor() { }

  ngOnInit() {
  }

}
