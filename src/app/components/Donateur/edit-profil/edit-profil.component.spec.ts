import { ComponentFixture, TestBed} from '@angular/core/testing';
import { EditProfilComponent } from './edit-profil.component';
import{ CUSTOM_ELEMENTS_SCHEMA}from '@angular/core';
describe('EditProfilComponent', () => {
  let component: EditProfilComponent;
  let fixture: ComponentFixture<EditProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfilComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
