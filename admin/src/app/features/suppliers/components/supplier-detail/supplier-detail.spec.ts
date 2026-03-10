import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDetail } from './supplier-detail';

describe('SupplierDetail', () => {
  let component: SupplierDetail;
  let fixture: ComponentFixture<SupplierDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
