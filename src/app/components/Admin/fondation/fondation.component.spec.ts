import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondationComponent } from './fondation.component';

describe('FondationComponent', () => {
  let component: FondationComponent;
  let fixture: ComponentFixture<FondationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondationComponent]
    });
    fixture = TestBed.createComponent(FondationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
