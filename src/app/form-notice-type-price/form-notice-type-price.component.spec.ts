import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNoticeTypePriceComponent } from './form-notice-type-price.component';

describe('FormNoticeTypePriceComponent', () => {
  let component: FormNoticeTypePriceComponent;
  let fixture: ComponentFixture<FormNoticeTypePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNoticeTypePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNoticeTypePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
