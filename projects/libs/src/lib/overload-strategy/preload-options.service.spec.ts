import {TestBed} from '@angular/core/testing';

import {TriggerPreloadService} from './trigger-preload.service';

describe('TriggerPreloadService', () => {
  let service: TriggerPreloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriggerPreloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw an error if path is not given', () => {
    expect(service.startPreload('')).toThrowError();
  })

});
