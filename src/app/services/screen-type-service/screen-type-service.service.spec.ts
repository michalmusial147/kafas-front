import { TestBed } from '@angular/core/testing';

import { ScreenTypeServiceService } from './screen-type-service.service';

describe('ScreenTypeServiceService', () => {
  let service: ScreenTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
