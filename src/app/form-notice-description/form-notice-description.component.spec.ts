import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNoticeDescriptionComponent } from './form-notice-description.component';

describe('FormNoticeDescriptionComponent', () => {
  let component: FormNoticeDescriptionComponent;
  let fixture: ComponentFixture<FormNoticeDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNoticeDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNoticeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
