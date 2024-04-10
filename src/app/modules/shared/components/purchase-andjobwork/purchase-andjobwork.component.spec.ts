import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseANDjobworkComponent } from './purchase-andjobwork.component';

describe('PurchaseANDjobworkComponent', () => {
  let component: PurchaseANDjobworkComponent;
  let fixture: ComponentFixture<PurchaseANDjobworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseANDjobworkComponent]
    });
    fixture = TestBed.createComponent(PurchaseANDjobworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
