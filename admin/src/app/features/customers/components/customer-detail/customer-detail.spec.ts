import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetail } from './customer-detail';

describe('CustomerDetail', () => {
  let component: CustomerDetail;
  let fixture: ComponentFixture<CustomerDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
