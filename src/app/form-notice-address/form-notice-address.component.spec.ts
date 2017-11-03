import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNoticeAddressComponent } from './form-notice-address.component';

describe('FormNoticeAddressComponent', () => {
  let component: FormNoticeAddressComponent;
  let fixture: ComponentFixture<FormNoticeAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNoticeAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNoticeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
