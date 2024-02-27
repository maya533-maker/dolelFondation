import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DonateurDonHistoryComponent } from './donateur-don-history.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('DonateurDonHistoryComponent', () => {
  let component: DonateurDonHistoryComponent;
  let fixture: ComponentFixture<DonateurDonHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateurDonHistoryComponent],
      imports: [RouterTestingModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(DonateurDonHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
