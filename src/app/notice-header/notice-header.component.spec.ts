import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeHeaderComponent } from './notice-header.component';

describe('NoticeHeaderComponent', () => {
  let component: NoticeHeaderComponent;
  let fixture: ComponentFixture<NoticeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
