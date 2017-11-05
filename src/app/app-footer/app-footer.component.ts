import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  socialLinks = [
    {
      'address': 'https://twitter.com/htmlacademy_ru',
      'name': 'twitter',
      'text': 'Twitter'
    },
    {
      'address': 'https://www.instagram.com/htmlacademy/',
      'name': 'instagram',
      'text': 'Instagtam'
    },
    {
      'address': 'https://www.facebook.com/htmlacademy',
      'name': 'facebook',
      'text': 'Facebook'
    },
    {
      'address': 'https://vk.com/htmlacademy',
      'name': 'vk',
      'text': 'VK'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
