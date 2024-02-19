import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDonComponent } from './confirmation-don.component';

describe('ConfirmationDonComponent', () => {
  let component: ConfirmationDonComponent;
  let fixture: ComponentFixture<ConfirmationDonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationDonComponent]
    });
    fixture = TestBed.createComponent(ConfirmationDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
