import { TestBed } from '@angular/core/testing';

import { CordsService } from './cords.service';

describe('CordsService', () => {
  let service: CordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
