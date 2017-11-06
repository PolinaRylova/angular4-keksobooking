import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTokyoFiltersComponent } from './app-tokyo-filters.component';

describe('AppTokyoFiltersComponent', () => {
  let component: AppTokyoFiltersComponent;
  let fixture: ComponentFixture<AppTokyoFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTokyoFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTokyoFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
