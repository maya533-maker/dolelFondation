import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashfComponent } from './dashf.component';

describe('DashfComponent', () => {
  let component: DashfComponent;
  let fixture: ComponentFixture<DashfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashfComponent]
    });
    fixture = TestBed.createComponent(DashfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
