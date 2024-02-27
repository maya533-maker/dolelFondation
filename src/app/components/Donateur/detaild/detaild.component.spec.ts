import { ComponentFixture, TestBed } from '@angular/core/testing';
import{ CUSTOM_ELEMENTS_SCHEMA}from '@angular/core';
import { DetaildComponent } from './detaild.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('DetaildComponent', () => {
  let component: DetaildComponent;
  let fixture: ComponentFixture<DetaildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaildComponent],
      imports: [RouterTestingModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(DetaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
