import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeFormRoomsGuestsComponent } from './app-notice-form-rooms-guests.component';

describe('AppNoticeFormRoomsGuestsComponent', () => {
  let component: AppNoticeFormRoomsGuestsComponent;
  let fixture: ComponentFixture<AppNoticeFormRoomsGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeFormRoomsGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeFormRoomsGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
