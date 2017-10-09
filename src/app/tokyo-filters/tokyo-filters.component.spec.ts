import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokyoFiltersComponent } from './tokyo-filters.component';

describe('TokyoFiltersComponent', () => {
  let component: TokyoFiltersComponent;
  let fixture: ComponentFixture<TokyoFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokyoFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokyoFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
