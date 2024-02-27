import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import{ CUSTOM_ELEMENTS_SCHEMA}from '@angular/core';
import { DonateursAssociesComponent } from './donateurs-associes.component';

describe('DonateursAssociesComponent', () => {
  let component: DonateursAssociesComponent;
  let fixture: ComponentFixture<DonateursAssociesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateursAssociesComponent],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(DonateursAssociesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
