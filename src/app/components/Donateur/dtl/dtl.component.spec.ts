import { ComponentFixture, TestBed } from '@angular/core/testing';
import{CUSTOM_ELEMENTS_SCHEMA}from '@angular/core';
import { DtlComponent } from './dtl.component';

describe('DtlComponent', () => {
  let component: DtlComponent;
  let fixture: ComponentFixture<DtlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DtlComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(DtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
