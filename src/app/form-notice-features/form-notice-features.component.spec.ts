import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNoticeFeaturesComponent } from './form-notice-features.component';

describe('FormNoticeFeaturesComponent', () => {
  let component: FormNoticeFeaturesComponent;
  let fixture: ComponentFixture<FormNoticeFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNoticeFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNoticeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
