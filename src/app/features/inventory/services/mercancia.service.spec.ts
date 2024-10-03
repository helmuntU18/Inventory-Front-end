import { TestBed } from '@angular/core/testing';

import { MercanciaService } from './mercancia.service';

describe('InventoryService', () => {
  let service: MercanciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercanciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
