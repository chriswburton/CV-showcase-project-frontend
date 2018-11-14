import { TestBed } from '@angular/core/testing';

import { JobService } from './jobs.service';

describe('JobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobService = TestBed.get(JobService);
    expect(service).toBeTruthy();
  });
});
