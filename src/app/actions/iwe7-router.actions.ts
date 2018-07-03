import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7Router } from '../models/iwe7-router.model';
import { NavigationExtras } from '@angular/router';

export enum Iwe7RouterActionTypes {
  GoIwe7Router = '[Iwe7Router] Go Iwe7Router',
  BackIwe7Router = '[Iwe7Router] Back Iwe7Router',
  ForwardIwe7Router = '[Iwe7Router] Forward Iwe7Router',
}

export class GoIwe7Router implements Action {
  readonly type = Iwe7RouterActionTypes.GoIwe7Router;
  constructor(public payload: {
    path: any[];
    query?: object;
    extras?: NavigationExtras;
  }) { }
}

export class BackIwe7Router implements Action {
  readonly type = Iwe7RouterActionTypes.BackIwe7Router;
}

export class ForwardIwe7Router implements Action {
  readonly type = Iwe7RouterActionTypes.ForwardIwe7Router;
}

export type Iwe7RouterActions =
  GoIwe7Router
  | BackIwe7Router
  | ForwardIwe7Router;
