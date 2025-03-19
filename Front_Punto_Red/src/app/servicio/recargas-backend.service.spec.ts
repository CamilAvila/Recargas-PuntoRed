import { TestBed } from '@angular/core/testing';

import { RecargasBackendService } from './recargas-backend.service';

describe('RecargasBackendService', () => {
  let service: RecargasBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecargasBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
