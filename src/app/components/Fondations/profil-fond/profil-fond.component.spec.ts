import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfilFondComponent } from './profil-fond.component';
import { RouterTestingModule } from '@angular/router/testing';
import{NO_ERRORS_SCHEMA}from '@angular/core';
describe('ProfilFondComponent', () => {
  let component: ProfilFondComponent;
  let fixture: ComponentFixture<ProfilFondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilFondComponent],
      imports: [RouterTestingModule,HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProfilFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
