import { TestBed } from '@angular/core/testing';

import { CustomPreloadStratgyService } from './custom-preload-stratgy.service';

describe('CustomPreloadStratgyService', () => {
  let service: CustomPreloadStratgyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadStratgyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
