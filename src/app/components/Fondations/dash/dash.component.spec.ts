import { ComponentFixture, TestBed } from '@angular/core/testing';
import{ NO_ERRORS_SCHEMA }from '@angular/core';
import { DashComponent } from './dash.component';

describe('DashComponent', () => {
  let component: DashComponent;
  let fixture: ComponentFixture<DashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashComponent],
      schemas: [NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(DashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
