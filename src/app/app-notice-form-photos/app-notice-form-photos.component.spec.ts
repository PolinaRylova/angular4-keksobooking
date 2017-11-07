import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeFormPhotosComponent } from './app-notice-form-photos.component';

describe('AppNoticeFormPhotosComponent', () => {
  let component: AppNoticeFormPhotosComponent;
  let fixture: ComponentFixture<AppNoticeFormPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeFormPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeFormPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
