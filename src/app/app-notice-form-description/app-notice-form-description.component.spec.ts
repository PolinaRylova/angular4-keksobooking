import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticeFormDescriptionComponent } from './app-notice-form-description.component';

describe('AppNoticeFormDescriptionComponent', () => {
  let component: AppNoticeFormDescriptionComponent;
  let fixture: ComponentFixture<AppNoticeFormDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoticeFormDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoticeFormDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
