import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollecteClotureComponent } from './collecte-cloture.component';

describe('CollecteClotureComponent', () => {
  let component: CollecteClotureComponent;
  let fixture: ComponentFixture<CollecteClotureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollecteClotureComponent]
    });
    fixture = TestBed.createComponent(CollecteClotureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
