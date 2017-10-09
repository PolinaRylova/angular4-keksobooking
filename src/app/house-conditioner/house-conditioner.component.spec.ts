import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseConditionerComponent } from './house-conditioner.component';

describe('HouseConditionerComponent', () => {
  let component: HouseConditionerComponent;
  let fixture: ComponentFixture<HouseConditionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseConditionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseConditionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
