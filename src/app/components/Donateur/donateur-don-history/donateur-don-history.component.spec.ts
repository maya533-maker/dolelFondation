import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateurDonHistoryComponent } from './donateur-don-history.component';

describe('DonateurDonHistoryComponent', () => {
  let component: DonateurDonHistoryComponent;
  let fixture: ComponentFixture<DonateurDonHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateurDonHistoryComponent]
    });
    fixture = TestBed.createComponent(DonateurDonHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
