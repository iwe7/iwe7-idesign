import { Iwe7RouterActionTypes } from './../actions/iwe7-router.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Location } from '@angular/common';

import {
  GoIwe7Router
} from '../actions/iwe7-router.actions';

import { Action } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

@Injectable()
export class Iwe7RouterEffects {
  @Effect()
  GoIwe7Router$ = this.actions$.ofType(Iwe7RouterActionTypes.GoIwe7Router).pipe(
    map((res: GoIwe7Router) => res.payload),
    tap((res: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }) =>
      this.router.navigate(res.path, { ...res.query, ...res.extras })
    )
  );
  @Effect()
  BackIwe7Router$ = this.actions$.ofType(Iwe7RouterActionTypes.BackIwe7Router).pipe(
    tap(() => this.location.back())
  );
  @Effect()
  ForwardIwe7Router$: Observable<Action> = this.actions$.ofType(Iwe7RouterActionTypes.ForwardIwe7Router).pipe(
    tap(() => this.location.forward())
  );
  constructor(
    private actions$: Actions,
    public router: Router,
    public location: Location
  ) { }
}
