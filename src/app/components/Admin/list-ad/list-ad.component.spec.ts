import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdComponent } from './list-ad.component';

describe('ListAdComponent', () => {
  let component: ListAdComponent;
  let fixture: ComponentFixture<ListAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAdComponent]
    });
    fixture = TestBed.createComponent(ListAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
