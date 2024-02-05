import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondationsListComponent } from './fondations-list.component';

describe('FondationsListComponent', () => {
  let component: FondationsListComponent;
  let fixture: ComponentFixture<FondationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondationsListComponent]
    });
    fixture = TestBed.createComponent(FondationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
