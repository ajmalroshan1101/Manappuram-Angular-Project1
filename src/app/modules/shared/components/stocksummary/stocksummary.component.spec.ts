import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksummaryComponent } from './stocksummary.component';

describe('StocksummaryComponent', () => {
  let component: StocksummaryComponent;
  let fixture: ComponentFixture<StocksummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StocksummaryComponent]
    });
    fixture = TestBed.createComponent(StocksummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
