import { TestBed } from '@angular/core/testing';

import { TempHistoryService } from './temp-history.service';

describe('TempHistoryService', () => {
  let service: TempHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
