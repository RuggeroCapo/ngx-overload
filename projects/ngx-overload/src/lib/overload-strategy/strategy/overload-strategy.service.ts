import {Injectable} from '@angular/core';
import {TriggerPreloadService} from '../trigger-preload.service';
import {PreloadingStrategy, Route} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverloadStrategy implements PreloadingStrategy {
  private preloadOnDemand$: Observable<string>;

  constructor(private preloadOnDemandService: TriggerPreloadService) {
    this.preloadOnDemand$ = this.preloadOnDemandService.preloadTrigger;
  }

  /**
   * implementation of abstract from @angular/router PreloadingStrategy
   * @param route the route to be preloaded
   * @param load
   */
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return this.preloadOnDemand$.pipe(
      mergeMap(routePath => {
        const shouldPreload = this.preloadCheck(route, routePath);
        return shouldPreload ? load() : EMPTY;
      })
    );
  }

  /**
   * check if the preload is valid
   * @param route
   * @param routePath
   */
  private preloadCheck(route: Route, routePath: string): boolean {
    return [route.path, '*'].includes(routePath);
  }
}
