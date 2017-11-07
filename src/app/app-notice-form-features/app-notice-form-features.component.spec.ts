import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeFormFeaturesComponent } from './app-notice-form-features.component';

describe('AppNoticeFormFeaturesComponent', () => {
  let component: AppNoticeFormFeaturesComponent;
  let fixture: ComponentFixture<AppNoticeFormFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeFormFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeFormFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
