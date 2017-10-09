import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseElevatorComponent } from './house-elevator.component';

describe('HouseElevatorComponent', () => {
  let component: HouseElevatorComponent;
  let fixture: ComponentFixture<HouseElevatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseElevatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseElevatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
