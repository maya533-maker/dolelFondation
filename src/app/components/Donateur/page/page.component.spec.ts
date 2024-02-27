import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import{CUSTOM_ELEMENTS_SCHEMA}from '@angular/core';

@NgModule({
  declarations: [PageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
class TestModule {}

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule]
    });
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
