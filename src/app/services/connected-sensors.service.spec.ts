import { TestBed } from '@angular/core/testing';

import { ConnectedSensorsService } from './connected-sensors.service';

describe('ConnectedSensorsService', () => {
  let service: ConnectedSensorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectedSensorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
