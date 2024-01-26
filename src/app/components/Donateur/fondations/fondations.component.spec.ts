import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondationsComponent } from './fondations.component';

describe('FondationsComponent', () => {
  let component: FondationsComponent;
  let fixture: ComponentFixture<FondationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondationsComponent]
    });
    fixture = TestBed.createComponent(FondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
