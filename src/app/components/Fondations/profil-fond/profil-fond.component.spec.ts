import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilFondComponent } from './profil-fond.component';

describe('ProfilFondComponent', () => {
  let component: ProfilFondComponent;
  let fixture: ComponentFixture<ProfilFondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilFondComponent]
    });
    fixture = TestBed.createComponent(ProfilFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
