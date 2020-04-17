import {TestBed} from '@angular/core/testing';
import {OverloadStrategy} from './overload-strategy.service';
import {TriggerPreloadService} from '../trigger-preload.service';
import {BehaviorSubject, of} from 'rxjs';
import {Route} from '@angular/router';
import {isEmpty} from 'rxjs/operators';

describe('OverloadStrategyService', () => {
  let service: OverloadStrategy;
  const mockPreloadOnDemand$: BehaviorSubject<string> = new BehaviorSubject<
    string
  >('example');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriggerPreloadService],
    });
    service = TestBed.inject(OverloadStrategy);
    service.preloadOnDemand$ = mockPreloadOnDemand$;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if the preload is valid', () => {
    const mockRoute: Route = {
      path: 'example',
    };
    let path = 'example';
    expect(service.preloadCheck(mockRoute, path)).toEqual(true);
    path = 'test';
    expect(service.preloadCheck(mockRoute, path)).toEqual(false);
  });

  it('should return the load observable when the route is valid', () => {
    const mockRoute: Route = {
      path: 'example',
    };
    const failRoute: Route = {
      path: 'failRoute',
    };
    const preload = service.preload(mockRoute, () => of(mockRoute));
    preload.pipe(isEmpty()).subscribe(s => expect(s).toBeFalse());
    // TODO: add fail route logic, how to handle empty?
    expect(failRoute).toEqual(failRoute);
  });
});
