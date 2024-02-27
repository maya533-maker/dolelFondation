import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ConfirmationDonComponent } from './confirmation-don.component';

describe('ConfirmationDonComponent', () => {
  let component: ConfirmationDonComponent;
  let fixture: ComponentFixture<ConfirmationDonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationDonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [

        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'test-id'
              }
            },
            params: of({ id: 'test-id' })
          }
        }
      ]
    });
    fixture = TestBed.createComponent(ConfirmationDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
