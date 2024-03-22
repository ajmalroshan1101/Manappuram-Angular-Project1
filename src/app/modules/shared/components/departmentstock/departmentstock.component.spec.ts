import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentstockComponent } from './departmentstock.component';

describe('DepartmentstockComponent', () => {
  let component: DepartmentstockComponent;
  let fixture: ComponentFixture<DepartmentstockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentstockComponent]
    });
    fixture = TestBed.createComponent(DepartmentstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
