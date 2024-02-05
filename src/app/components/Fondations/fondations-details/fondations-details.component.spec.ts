import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondationsDetailsComponent } from './fondations-details.component';

describe('FondationsDetailsComponent', () => {
  let component: FondationsDetailsComponent;
  let fixture: ComponentFixture<FondationsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondationsDetailsComponent]
    });
    fixture = TestBed.createComponent(FondationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
