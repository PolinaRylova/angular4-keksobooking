import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeFormTitleComponent } from './app-notice-form-title.component';

describe('AppNoticeFormTitleComponent', () => {
  let component: AppNoticeFormTitleComponent;
  let fixture: ComponentFixture<AppNoticeFormTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeFormTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeFormTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
