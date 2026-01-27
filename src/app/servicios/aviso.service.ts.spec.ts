import { TestBed } from '@angular/core/testing';

import { AvisoService } from './aviso.service';

describe('AvisoServiceTs', () => {
  let service: AvisoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvisoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
