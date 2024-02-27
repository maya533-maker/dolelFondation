import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListefondationAbonneComponent } from './listefondation-abonne.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('ListefondationAbonneComponent', () => {
  let component: ListefondationAbonneComponent;
  let fixture: ComponentFixture<ListefondationAbonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListefondationAbonneComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule, RouterModule.forRoot([])]

    });
    fixture = TestBed.createComponent(ListefondationAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
