import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiryReport } from './expiry-report';

describe('ExpiryReport', () => {
  let component: ExpiryReport;
  let fixture: ComponentFixture<ExpiryReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpiryReport],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpiryReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
