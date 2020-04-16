import {TestBed} from '@angular/core/testing';
import {OverloadStrategy} from './overload-strategy.service';


describe('OverloadStrategyService', () => {
  let service: OverloadStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverloadStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
