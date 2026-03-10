import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierForm } from './supplier-form';

describe('SupplierForm', () => {
  let component: SupplierForm;
  let fixture: ComponentFixture<SupplierForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
