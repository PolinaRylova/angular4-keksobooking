import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTokyoPinMapComponent } from './app-tokyo-pin-map.component';

describe('AppTokyoPinMapComponent', () => {
  let component: AppTokyoPinMapComponent;
  let fixture: ComponentFixture<AppTokyoPinMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTokyoPinMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTokyoPinMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
