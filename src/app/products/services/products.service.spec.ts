import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService]
    });
  });

  it('should be created', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});
