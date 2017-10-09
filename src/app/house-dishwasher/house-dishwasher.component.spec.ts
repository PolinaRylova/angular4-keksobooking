import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDishwasherComponent } from './house-dishwasher.component';

describe('HouseDishwasherComponent', () => {
  let component: HouseDishwasherComponent;
  let fixture: ComponentFixture<HouseDishwasherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDishwasherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDishwasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
