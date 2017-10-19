import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokyoOfferDialogComponent } from './tokyo-offer-dialog.component';

describe('TokyoOfferDialogComponent', () => {
  let component: TokyoOfferDialogComponent;
  let fixture: ComponentFixture<TokyoOfferDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokyoOfferDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokyoOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
