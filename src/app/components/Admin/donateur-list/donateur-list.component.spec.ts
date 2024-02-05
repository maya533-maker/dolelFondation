import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateurListComponent } from './donateur-list.component';

describe('DonateurListComponent', () => {
  let component: DonateurListComponent;
  let fixture: ComponentFixture<DonateurListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateurListComponent]
    });
    fixture = TestBed.createComponent(DonateurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
