import { ComponentFixture, TestBed } from '@angular/core/testing';
import{CUSTOM_ELEMENTS_SCHEMA}from '@angular/core';
import { FondationsListComponent } from './fondations-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('FondationsListComponent', () => {
  let component: FondationsListComponent;
  let fixture: ComponentFixture<FondationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondationsListComponent],
      imports: [RouterTestingModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    });
    fixture = TestBed.createComponent(FondationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
