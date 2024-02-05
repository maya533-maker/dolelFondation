import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcolComponent } from './detailcol.component';

describe('DetailcolComponent', () => {
  let component: DetailcolComponent;
  let fixture: ComponentFixture<DetailcolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcolComponent]
    });
    fixture = TestBed.createComponent(DetailcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
