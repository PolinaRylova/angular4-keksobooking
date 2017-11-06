import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeHeaderComponent } from './app-notice-header.component';

describe('AppNoticeHeaderComponent', () => {
  let component: AppNoticeHeaderComponent;
  let fixture: ComponentFixture<AppNoticeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
