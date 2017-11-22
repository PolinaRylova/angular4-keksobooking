import { Component, OnInit, Renderer2, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-notice-photo-upload',
  templateUrl: './app-notice-photo-upload.component.html',
  styleUrls: ['./app-notice-photo-upload.component.css']
})
export class AppNoticePhotoUploadComponent implements OnInit, OnDestroy {
  FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  listenFunction: Function;
  @Output() fileLoadEmitter = new EventEmitter<URL>();

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  avatarInputHandler({target}) {
    const file = target.files[0];
    const fileName = file.name.toLowerCase();
    const matches = this.FILE_TYPES.some(function (item) {
      return fileName.endsWith(item);
    });
    if (matches) {
      const reader = new FileReader();
      this.listenFunction = this.renderer.listen(reader, 'load', (evt) => {
        this.fileLoadEmitter.emit(reader.result);
      });
      reader.readAsDataURL(file);
    }
  }

  ngOnDestroy() {
    this.listenFunction();
  }
}
