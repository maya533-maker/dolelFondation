import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFondationsComponent } from './list-fondations.component';

describe('ListFondationsComponent', () => {
  let component: ListFondationsComponent;
  let fixture: ComponentFixture<ListFondationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFondationsComponent]
    });
    fixture = TestBed.createComponent(ListFondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
