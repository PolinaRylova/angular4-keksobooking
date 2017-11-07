import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeFormCheckinCheckoutComponent } from './app-notice-form-checkin-checkout.component';

describe('AppNoticeFormCheckinCheckoutComponent', () => {
  let component: AppNoticeFormCheckinCheckoutComponent;
  let fixture: ComponentFixture<AppNoticeFormCheckinCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeFormCheckinCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeFormCheckinCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
