import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PageAdComponent } from './page-ad.component';

describe('PageAdComponent', () => {
  let component: PageAdComponent;
  let fixture: ComponentFixture<PageAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAdComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(PageAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
