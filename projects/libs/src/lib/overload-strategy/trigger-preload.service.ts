import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TriggerPreloadService {
  #_preloadTrigger = new Subject<string>();

  get preloadTrigger(): Observable<string> {
    return this.#_preloadTrigger.asObservable();
  }

  /**
   * Fires the preload of the rout
   * @param routePath route to be loaded
   */
  public startPreload(routePath: string) {
    if (routePath === undefined || routePath === '') {
      throw new Error(
        'routePath in undefined, define a route to enable preload'
      );
    }
    this.#_preloadTrigger.next(routePath);
  }
}
