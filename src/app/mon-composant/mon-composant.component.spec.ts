import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonComposantComponent } from './mon-composant.component';

describe('MonComposantComponent', () => {
  let component: MonComposantComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonComposantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(MonComposantComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "Test réussi!"', () => {
    expect(component.maFonction()).toBe('Test réussi!');
  });
});
