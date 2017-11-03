import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNoticeCheckinCheckoutComponent } from './form-notice-checkin-checkout.component';

describe('FormNoticeCheckinCheckoutComponent', () => {
  let component: FormNoticeCheckinCheckoutComponent;
  let fixture: ComponentFixture<FormNoticeCheckinCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNoticeCheckinCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNoticeCheckinCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
