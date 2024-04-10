import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionreportComponent } from './productionreport.component';

describe('ProductionreportComponent', () => {
  let component: ProductionreportComponent;
  let fixture: ComponentFixture<ProductionreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionreportComponent]
    });
    fixture = TestBed.createComponent(ProductionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
