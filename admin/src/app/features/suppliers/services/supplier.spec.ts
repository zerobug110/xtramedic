import { TestBed } from '@angular/core/testing';

import { Supplier } from './supplier';

describe('Supplier', () => {
  let service: Supplier;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Supplier);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
