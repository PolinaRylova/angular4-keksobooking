import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeFormAddressComponent } from './app-notice-form-address.component';

describe('AppNoticeFormAddressComponent', () => {
  let component: AppNoticeFormAddressComponent;
  let fixture: ComponentFixture<AppNoticeFormAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeFormAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
