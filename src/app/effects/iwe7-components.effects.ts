import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import {
  Iwe7ComponentsActions,
  Iwe7ComponentsActionTypes,
  LoadIwe7Componentss,
  LoadSuccessIwe7Componentss,
  LoadFailIwe7Componentss,
  AddIwe7Componentss,
  AddSuccessIwe7Componentss,
  AddFailIwe7Componentss,
  AddIwe7Components,
  AddSuccessIwe7Components,
  AddFailIwe7Components,
  UpsertIwe7Components,
  UpsertSuccessIwe7Components,
  UpsertFailIwe7Components,
  UpsertIwe7Componentss,
  UpsertSuccessIwe7Componentss,
  UpsertFailIwe7Componentss,
  UpdateIwe7Components,
  UpdateSuccessIwe7Components,
  UpdateFailIwe7Components,
  UpdateIwe7Componentss,
  UpdateSuccessIwe7Componentss,
  UpdateFailIwe7Componentss,
  DeleteIwe7Components,
  DeleteSuccessIwe7Components,
  DeleteFailIwe7Components,
  DeleteIwe7Componentss,
  DeleteSuccessIwe7Componentss,
  DeleteFailIwe7Componentss,
  ClearIwe7Componentss,
  ClearSuccessIwe7Componentss,
  ClearFailIwe7Componentss
} from '../actions/iwe7-components.actions';
import { Iwe7Util2Service, Iwe7Response } from 'iwe7-util2';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Iwe7Components } from '../models/iwe7-components.model';

@Injectable()
export class Iwe7ComponentsEffects {
  @Effect()
  LoadIwe7Componentss$: Observable<Action> = this.actions$.ofType(Iwe7ComponentsActionTypes.LoadIwe7Componentss).pipe(
    map((res: LoadIwe7Componentss) => res.payload),
    switchMap(res => this.util.wpost('Iwe7Components', 'LoadIwe7Componentss', res)),
    map((res: Iwe7Response<{ list: Iwe7Components[], total: number }>) => {
      if (res.code === 0) {
        return new LoadSuccessIwe7Componentss({ Iwe7Componentss: res.data.list, total: res.data.total });
      } else {
        return new LoadFailIwe7Componentss({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7Componentss({ msg: err }))),
  );
  @Effect()
  AddIwe7Components$: Observable<Action> = this.actions$.ofType(Iwe7ComponentsActionTypes.AddIwe7Components).pipe(
    map((res: AddIwe7Components) => res.payload),
    switchMap(res => this.util.wpost('Iwe7Components', 'AddIwe7Components', res)),
    map((res: Iwe7Response<Iwe7Components>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7Components({ Iwe7Components: res.data });
      } else {
        return new AddFailIwe7Components({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7Componentss({ msg: err }))),
  );
  @Effect()
  AddIwe7Componentss$: Observable<Action> = this.actions$.ofType(Iwe7ComponentsActionTypes.AddIwe7Componentss).pipe(
    map((res: AddIwe7Componentss) => res.payload),
    switchMap(res => this.util.wpost('Iwe7Components', 'AddIwe7Componentss', res)),
    map((res: Iwe7Response<Iwe7Components[]>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7Componentss({ Iwe7Componentss: res.data });
      } else {
        return new AddFailIwe7Componentss({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7Componentss({ msg: err }))),
  );
  @Effect()
  UpsertIwe7Components$: Observable<Action> = this.actions$.ofType(Iwe7ComponentsActionTypes.UpsertIwe7Components).pipe(
    map((res: UpsertIwe7Components) => res.payload),
    switchMap(res => this.util.wpost('Iwe7Components', 'UpsertIwe7Components', res)),
    map((res: Iwe7Response<Iwe7Components>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7Components({ Iwe7Components: res.data });
      } else {
        return new UpsertFailIwe7Components({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7Components({ msg: err }))),
  );
  @Effect()
  UpsertIwe7Componentss$: Observable<Action> = this.actions$.ofType(Iwe7ComponentsActionTypes.UpsertIwe7Componentss).pipe(
    map((res: UpsertIwe7Componentss) => res.payload),
    switchMap(res => this.util.wpost('Iwe7Components', 'UpsertIwe7Componentss', res)),
    map((res: Iwe7Response<Iwe7Components[]>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7Componentss({ Iwe7Componentss: res.data });
      } else {
        return new UpsertFailIwe7Componentss({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7Componentss({ msg: err }))),
  );
  @Effect()
  UpdateIwe7Components$: Observable<Action> = this.actions$.ofType(Iwe7ComponentsActionTypes.UpdateIwe7Components).pipe(
    map((res: UpdateIwe7Components) => res.payload),
    switchMap(res => this.util.wpost('Iwe7Components', 'UpdateIwe7Components', res)),
    map((res: Iwe7Response<Update<Iwe7Components>>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7Components({ Iwe7Components: res.data });
      } else {
        return new UpdateFailIwe7Components({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7Components({ msg: err }))),
  );
  @Effect()
  UpdateIwe7Componentss$: Observable<Action> = this.actions$.ofType(Iwe7ComponentsActionTypes.UpdateIwe7Componentss).pipe(
    map((res: UpdateIwe7Componentss) => res.payload),
    switchMap(res => this.util.wpost('Iwe7Components', 'UpdateIwe7Componentss', res)),
    map((res: Iwe7Response<Update<Iwe7Components>[]>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7Componentss({ Iwe7Componentss: res.data });
      } else {
        return new UpdateFailIwe7Componentss({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7Componentss({ msg: err }))),
  );
  @Effect()
  DeleteIwe7Components$: Observable<Action> = this.actions$.ofType(Iwe7ComponentsActionTypes.DeleteIwe7Components).pipe(
    map((res: DeleteIwe7Components) => res.payload),
    switchMap(res => this.util.wpost('Iwe7Components', 'DeleteIwe7Components', res)),
    map((res: Iwe7Response<string>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7Components({ id: res.data });
      } else {
        return new DeleteFailIwe7Components({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7Components({ msg: err }))),
  );
  @Effect()
  DeleteIwe7Componentss$: Observable<Action> = this.actions$.ofType(Iwe7ComponentsActionTypes.DeleteIwe7Componentss).pipe(
    map((res: DeleteIwe7Componentss) => res.payload),
    switchMap(res => this.util.wpost('Iwe7Components', 'DeleteIwe7Componentss', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7Componentss({ ids: res.data });
      } else {
        return new DeleteFailIwe7Componentss({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7Components({ msg: err }))),
  );
  @Effect()
  ClearIwe7Componentss$: Observable<Action> = this.actions$.ofType(Iwe7ComponentsActionTypes.ClearIwe7Componentss).pipe(
    switchMap(res => this.util.wpost('Iwe7Components', 'ClearIwe7Componentss', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new ClearSuccessIwe7Componentss();
      } else {
        return new ClearFailIwe7Componentss({ msg: res.msg });
      }
    }),
    catchError(err => of(new ClearFailIwe7Componentss({ msg: err }))),
  );
  constructor(private actions$: Actions, public util: Iwe7Util2Service) {}
}
