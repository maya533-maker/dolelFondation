import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnenComponent } from './abonnen.component';

describe('AbonnenComponent', () => {
  let component: AbonnenComponent;
  let fixture: ComponentFixture<AbonnenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbonnenComponent]
    });
    fixture = TestBed.createComponent(AbonnenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
