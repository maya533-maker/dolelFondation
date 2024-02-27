import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AProposComponent } from './a-propos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core'; 

describe('AProposComponent', () => {
  let component: AProposComponent;
  let fixture: ComponentFixture<AProposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AProposComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
