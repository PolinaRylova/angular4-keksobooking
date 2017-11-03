import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNoticeRoomsGuestsComponent } from './form-notice-rooms-guests.component';

describe('FormNoticeRoomsGuestsComponent', () => {
  let component: FormNoticeRoomsGuestsComponent;
  let fixture: ComponentFixture<FormNoticeRoomsGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNoticeRoomsGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNoticeRoomsGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
