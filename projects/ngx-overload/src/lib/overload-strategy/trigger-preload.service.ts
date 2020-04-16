import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export const NO_PATH_ERROR = new Error('routePath is undefined or empty, define a route to enable preload');

@Injectable({
  providedIn: 'root',
})
export class TriggerPreloadService {
  private _preloadTrigger = new Subject<string>();

  /**
   * returns the trigger subject as an observable
   */
  get preloadTrigger(): Observable<string> {
    return this._preloadTrigger.asObservable();
  }

  /**
   * Fires the preload of the rout
   * @param routePath route to be loaded
   */
  public startPreload(routePath: string) {
    if (routePath === undefined || routePath === '') {
      throw NO_PATH_ERROR;
    }
    this._preloadTrigger.next(routePath);
  }
}
