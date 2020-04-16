import {TestBed} from '@angular/core/testing';

import {OverloadStrategyService} from './overload-strategy.service';

describe('OverloadStrategyService', () => {
  let service: OverloadStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverloadStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
