import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsfondationComponent } from './detailsfondation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DetailsfondationComponent', () => {
  let component: DetailsfondationComponent;
  let fixture: ComponentFixture<DetailsfondationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsfondationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] 
    });
    fixture = TestBed.createComponent(DetailsfondationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
