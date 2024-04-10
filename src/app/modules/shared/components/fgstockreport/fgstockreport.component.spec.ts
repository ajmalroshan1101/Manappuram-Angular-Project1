import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FGstockreportComponent } from './fgstockreport.component';

describe('FGstockreportComponent', () => {
  let component: FGstockreportComponent;
  let fixture: ComponentFixture<FGstockreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FGstockreportComponent]
    });
    fixture = TestBed.createComponent(FGstockreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
