import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockReport } from './stock-report';

describe('StockReport', () => {
  let component: StockReport;
  let fixture: ComponentFixture<StockReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockReport],
    }).compileComponents();

    fixture = TestBed.createComponent(StockReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
