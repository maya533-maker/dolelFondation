import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FondationsDetailsComponent } from './fondations-details.component';
import { CollecteService } from '../../service/collecte.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FondationsDetailsComponent', () => {
  let component: FondationsDetailsComponent;
  let fixture: ComponentFixture<FondationsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FondationsDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        CollecteService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }) // Simuler un observable de paramètres de route
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
