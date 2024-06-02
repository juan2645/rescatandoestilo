import { TestBed } from '@angular/core/testing';

import { ClothesCartService } from './clothes-cart.service';

describe('ClothesCartService', () => {
  let service: ClothesCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothesCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
