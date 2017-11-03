import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNoticePhotosComponent } from './form-notice-photos.component';

describe('FormNoticePhotosComponent', () => {
  let component: FormNoticePhotosComponent;
  let fixture: ComponentFixture<FormNoticePhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNoticePhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNoticePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
