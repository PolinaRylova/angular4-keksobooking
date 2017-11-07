import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeFormRightPanelComponent } from './app-notice-form-right-panel.component';

describe('AppNoticeFormRightPanelComponent', () => {
  let component: AppNoticeFormRightPanelComponent;
  let fixture: ComponentFixture<AppNoticeFormRightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeFormRightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeFormRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
