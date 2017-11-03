import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRightPanelComponent } from './form-right-panel.component';

describe('FormRightPanelComponent', () => {
  let component: FormRightPanelComponent;
  let fixture: ComponentFixture<FormRightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
