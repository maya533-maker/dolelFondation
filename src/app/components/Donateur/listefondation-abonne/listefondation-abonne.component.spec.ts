import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefondationAbonneComponent } from './listefondation-abonne.component';

describe('ListefondationAbonneComponent', () => {
  let component: ListefondationAbonneComponent;
  let fixture: ComponentFixture<ListefondationAbonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListefondationAbonneComponent]
    });
    fixture = TestBed.createComponent(ListefondationAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
