import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionDetail } from './prescription-detail';

describe('PrescriptionDetail', () => {
  let component: PrescriptionDetail;
  let fixture: ComponentFixture<PrescriptionDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(PrescriptionDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
