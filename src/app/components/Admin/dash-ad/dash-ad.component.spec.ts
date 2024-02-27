import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdComponent } from './dash-ad.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('DashAdComponent', () => {
  let component: DashAdComponent;
  let fixture: ComponentFixture<DashAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAdComponent],
      imports: [RouterTestingModule, HttpClientModule],

    });
    fixture = TestBed.createComponent(DashAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
