import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokyoPinMapComponent } from './tokyo-pin-map.component';

describe('TokyoPinMapComponent', () => {
  let component: TokyoPinMapComponent;
  let fixture: ComponentFixture<TokyoPinMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokyoPinMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokyoPinMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
