import { ComponentFixture, TestBed } from '@angular/core/testing';
import{CUSTOM_ELEMENTS_SCHEMA}from '@angular/core';
import { FondationListComponent } from './fondation-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('FondationListComponent', () => {
  let component: FondationListComponent;
  let fixture: ComponentFixture<FondationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondationListComponent],
      imports: [RouterTestingModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(FondationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
