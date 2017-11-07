import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTokyoOfferDialogComponent } from './app-tokyo-offer-dialog.component';

describe('AppTokyoOfferDialogComponent', () => {
  let component: AppTokyoOfferDialogComponent;
  let fixture: ComponentFixture<AppTokyoOfferDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTokyoOfferDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTokyoOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
