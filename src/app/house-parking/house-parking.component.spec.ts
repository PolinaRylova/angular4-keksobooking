import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseParkingComponent } from './house-parking.component';

describe('HouseParkingComponent', () => {
  let component: HouseParkingComponent;
  let fixture: ComponentFixture<HouseParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
