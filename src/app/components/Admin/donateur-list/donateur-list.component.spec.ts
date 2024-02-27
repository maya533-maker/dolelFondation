import { ComponentFixture, TestBed } from '@angular/core/testing';
import{ CUSTOM_ELEMENTS_SCHEMA}from '@angular/core';
import { DonateurListComponent } from './donateur-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('DonateurListComponent', () => {
  let component: DonateurListComponent;
  let fixture: ComponentFixture<DonateurListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateurListComponent],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(DonateurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
