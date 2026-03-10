import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierList } from './supplier-list';

describe('SupplierList', () => {
  let component: SupplierList;
  let fixture: ComponentFixture<SupplierList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierList],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
