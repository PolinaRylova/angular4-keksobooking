import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLeftPanelComponent } from './form-left-panel.component';

describe('FormLeftPanelComponent', () => {
  let component: FormLeftPanelComponent;
  let fixture: ComponentFixture<FormLeftPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLeftPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
