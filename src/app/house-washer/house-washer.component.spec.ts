import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseWasherComponent } from './house-washer.component';

describe('HouseWasherComponent', () => {
  let component: HouseWasherComponent;
  let fixture: ComponentFixture<HouseWasherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseWasherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseWasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
