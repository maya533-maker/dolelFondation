import { ComponentFixture, TestBed } from '@angular/core/testing';
import{CUSTOM_ELEMENTS_SCHEMA}from '@angular/core';
import { ListAdComponent } from './list-ad.component';

describe('ListAdComponent', () => {
  let component: ListAdComponent;
  let fixture: ComponentFixture<ListAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAdComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ListAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
