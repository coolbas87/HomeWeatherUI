import { TestBed } from '@angular/core/testing';

import { CurrentTempService } from './current-temp.service';

describe('CurrentTempService', () => {
  let service: CurrentTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
