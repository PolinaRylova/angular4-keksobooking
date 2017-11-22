import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-form-photos',
  templateUrl: './app-notice-form-photos.component.html',
  styleUrls: ['./app-notice-form-photos.component.css']
})
export class AppNoticeFormPhotosComponent implements OnInit {

  formPhotos = [
    {
      src: undefined,
      number: 1
    },
    {
      src: undefined,
      number: 2
    },
    {
      src: undefined,
      number: 3
    },
    {
      src: undefined,
      number: 4
    },
    {
      src: undefined,
      number: 5
    },
    {
      src: undefined,
      number: 6
    },
    {
      src: undefined,
      number: 7
    },
    {
      src: undefined,
      number: 8
    },
    {
      src: undefined,
      number: 9
    },
    {
      src: undefined,
      number: 10
    },
    {
      src: undefined,
      number: 11
    },
    {
      src: undefined,
      number: 12
    },
    {
      src: undefined,
      number: 13
    },
    {
      src: undefined,
      number: 14
    },
    {
      src: undefined,
      number: 15
    },
    {
      src: undefined,
      number: 16
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  housePhotoLoadHandler(url) {
    const undefinedSrcPhotos = this.formPhotos.filter(function (item) {
      return item.src === undefined;
    });
    if (undefinedSrcPhotos.length > 0) {
      undefinedSrcPhotos[0].src = url;
    } else {
      alert('Вы можете загрузить не более 16 фото');
    }
  }
}
