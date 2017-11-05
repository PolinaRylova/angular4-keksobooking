import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTokyoComponent } from './app-tokyo.component';

describe('AppTokyoComponent', () => {
  let component: AppTokyoComponent;
  let fixture: ComponentFixture<AppTokyoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTokyoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTokyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
