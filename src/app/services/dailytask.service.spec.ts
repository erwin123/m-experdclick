import { TestBed, inject } from '@angular/core/testing';

import { DailytaskService } from './dailytask.service';

describe('DailytaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailytaskService]
    });
  });

  it('should be created', inject([DailytaskService], (service: DailytaskService) => {
    expect(service).toBeTruthy();
  }));
});
