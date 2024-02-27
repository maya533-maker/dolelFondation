import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashfComponent } from './dashf.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('DashfComponent', () => {
  let component: DashfComponent;
  let fixture: ComponentFixture<DashfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashfComponent],
      imports: [RouterTestingModule,HttpClientModule],
    });
    fixture = TestBed.createComponent(DashfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
