import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticePhotoUploadComponent } from './app-notice-photo-upload.component';

describe('AppNoticePhotoUploadComponent', () => {
  let component: AppNoticePhotoUploadComponent;
  let fixture: ComponentFixture<AppNoticePhotoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticePhotoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticePhotoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
