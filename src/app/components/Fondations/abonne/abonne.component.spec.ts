import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AbonneComponent } from './abonne.component';
import { HttpClientModule } from '@angular/common/http';

describe('AbonneComponent', () => {
  let component: AbonneComponent;
  let fixture: ComponentFixture<AbonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbonneComponent],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
