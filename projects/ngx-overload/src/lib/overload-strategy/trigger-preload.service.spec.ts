import {TestBed} from '@angular/core/testing';

import {NO_PATH_ERROR, TriggerPreloadService} from './trigger-preload.service';
import {Observable} from 'rxjs';

describe('TriggerPreloadService', () => {
  let service: TriggerPreloadService;
  let subject: Observable<string>;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriggerPreloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw an error if path is not given', () => {
    expect(service.startPreload)
      .toThrow(NO_PATH_ERROR);
  });

  it('should notify subject with selected route', () => {
    const test = 'test';
    service.startPreload(test);
    service.preloadTrigger.subscribe(value => expect(value).toBe(test));
  });
});
