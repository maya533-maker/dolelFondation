import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondationListComponent } from './fondation-list.component';

describe('FondationListComponent', () => {
  let component: FondationListComponent;
  let fixture: ComponentFixture<FondationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondationListComponent]
    });
    fixture = TestBed.createComponent(FondationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
