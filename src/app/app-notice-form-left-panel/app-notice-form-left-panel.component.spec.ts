import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeFormLeftPanelComponent } from './app-notice-form-left-panel.component';

describe('AppNoticeFormLeftPanelComponent', () => {
  let component: AppNoticeFormLeftPanelComponent;
  let fixture: ComponentFixture<AppNoticeFormLeftPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeFormLeftPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeFormLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
