import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsfondationComponent } from './detailsfondation.component';

describe('DetailsfondationComponent', () => {
  let component: DetailsfondationComponent;
  let fixture: ComponentFixture<DetailsfondationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsfondationComponent]
    });
    fixture = TestBed.createComponent(DetailsfondationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
