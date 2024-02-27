import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FondationsComponent } from './fondations.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('FondationsComponent', () => {
  let component: FondationsComponent;
  let fixture: ComponentFixture<FondationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondationsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, HttpClientModule],
    });
    fixture = TestBed.createComponent(FondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
