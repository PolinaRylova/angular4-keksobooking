import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNoticeTitleComponent } from './form-notice-title.component';

describe('FormNoticeTitleComponent', () => {
  let component: FormNoticeTitleComponent;
  let fixture: ComponentFixture<FormNoticeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNoticeTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNoticeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
