import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdComponent } from './dash-ad.component';

describe('DashAdComponent', () => {
  let component: DashAdComponent;
  let fixture: ComponentFixture<DashAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdComponent]
    });
    fixture = TestBed.createComponent(DashAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
