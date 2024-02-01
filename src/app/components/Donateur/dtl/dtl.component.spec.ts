import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtlComponent } from './dtl.component';

describe('DtlComponent', () => {
  let component: DtlComponent;
  let fixture: ComponentFixture<DtlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DtlComponent]
    });
    fixture = TestBed.createComponent(DtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
