import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseGuestsComponent } from './house-guests.component';

describe('HouseGuestsComponent', () => {
  let component: HouseGuestsComponent;
  let fixture: ComponentFixture<HouseGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
