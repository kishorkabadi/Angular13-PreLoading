import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer,mergeMap } from 'rxjs';
import {map } from 'rxjs/operators';
@Injectable()
export class CustomPreloadStratgyService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preLoad']) {

      if (route.data['delay']) {
        console.log("PreLoad Path with delay:" + route.path);
        return timer(6000).pipe(mergeMap(() => load()));
        //return timer(6000).pipe(map(() => load()));
      }
      else {
        console.log("PreLoad Path:" + route.path);
        return load();
      }
    }
    else {
      return of(null);
    }

    // const loadRoute = (delay: number) => delay > 0 ? timer(delay*1000).pipe(map(() => fn())) : fn();
    // if (route.data && route.data['preLoad']) {
    //   const delay = route.data['loadAfterSeconds'] ? route.data['loadAfterSeconds'] : 0;
    //   return loadRoute(delay);
    // }
    // return of(null);
  }
  constructor() { }
}
