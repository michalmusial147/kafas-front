import { TestBed } from '@angular/core/testing';

import { RenovationsService } from './renovations.service';

describe('RenovationsService', () => {
  let service: RenovationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenovationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
