import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployestockComponent } from './employestock.component';

describe('EmployestockComponent', () => {
  let component: EmployestockComponent;
  let fixture: ComponentFixture<EmployestockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployestockComponent]
    });
    fixture = TestBed.createComponent(EmployestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
