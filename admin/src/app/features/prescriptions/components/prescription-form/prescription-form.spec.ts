import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionForm } from './prescription-form';

describe('PrescriptionForm', () => {
  let component: PrescriptionForm;
  let fixture: ComponentFixture<PrescriptionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PrescriptionForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
