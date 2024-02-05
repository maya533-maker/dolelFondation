import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollecteComponent } from './collecte.component';

describe('CollecteComponent', () => {
  let component: CollecteComponent;
  let fixture: ComponentFixture<CollecteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollecteComponent]
    });
    fixture = TestBed.createComponent(CollecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
