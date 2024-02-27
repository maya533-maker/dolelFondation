import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { ListFondationsComponent } from './list-fondations.component';

describe('ListFondationsComponent', () => {
  let component: ListFondationsComponent;
  let fixture: ComponentFixture<ListFondationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFondationsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ListFondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
