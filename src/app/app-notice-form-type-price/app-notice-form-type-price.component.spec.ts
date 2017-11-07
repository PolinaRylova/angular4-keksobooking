import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeFormTypePriceComponent } from './app-notice-form-type-price.component';

describe('AppNoticeFormTypePriceComponent', () => {
  let component: AppNoticeFormTypePriceComponent;
  let fixture: ComponentFixture<AppNoticeFormTypePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeFormTypePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeFormTypePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
