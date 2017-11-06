import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeFormComponent } from './app-notice-form.component';

describe('AppNoticeFormComponent', () => {
  let component: AppNoticeFormComponent;
  let fixture: ComponentFixture<AppNoticeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
