import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateursAssociesComponent } from './donateurs-associes.component';

describe('DonateursAssociesComponent', () => {
  let component: DonateursAssociesComponent;
  let fixture: ComponentFixture<DonateursAssociesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateursAssociesComponent]
    });
    fixture = TestBed.createComponent(DonateursAssociesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
