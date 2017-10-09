import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseWifiComponent } from './house-wifi.component';

describe('HouseWifiComponent', () => {
  let component: HouseWifiComponent;
  let fixture: ComponentFixture<HouseWifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseWifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseWifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
