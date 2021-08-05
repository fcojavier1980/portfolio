import { TestBed } from '@angular/core/testing';

import { VardatoService } from './vardato.service';

describe('VardatoService', () => {
  let service: VardatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VardatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
