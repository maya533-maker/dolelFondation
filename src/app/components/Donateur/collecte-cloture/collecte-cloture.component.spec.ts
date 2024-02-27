import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CollecteClotureComponent } from './collecte-cloture.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('CollecteClotureComponent', () => {
  let component: CollecteClotureComponent;
  let fixture: ComponentFixture<CollecteClotureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollecteClotureComponent],
      imports: [RouterTestingModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CollecteClotureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
