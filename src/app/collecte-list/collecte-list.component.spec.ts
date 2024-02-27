import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollecteListComponent } from './collecte-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('CollecteListComponent', () => {
  let component: CollecteListComponent;
  let fixture: ComponentFixture<CollecteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollecteListComponent],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(CollecteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
