import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import {
  SelectSuccessIwe7App,
  SelectIwe7App,
  SelectFailIwe7App,
  Iwe7AppActions,
  Iwe7AppActionTypes,
  LoadIwe7Apps,
  LoadSuccessIwe7Apps,
  LoadFailIwe7Apps,
  AddIwe7Apps,
  AddSuccessIwe7Apps,
  AddFailIwe7Apps,
  AddIwe7App,
  AddSuccessIwe7App,
  AddFailIwe7App,
  UpsertIwe7App,
  UpsertSuccessIwe7App,
  UpsertFailIwe7App,
  UpsertIwe7Apps,
  UpsertSuccessIwe7Apps,
  UpsertFailIwe7Apps,
  UpdateIwe7App,
  UpdateSuccessIwe7App,
  UpdateFailIwe7App,
  UpdateIwe7Apps,
  UpdateSuccessIwe7Apps,
  UpdateFailIwe7Apps,
  DeleteIwe7App,
  DeleteSuccessIwe7App,
  DeleteFailIwe7App,
  DeleteIwe7Apps,
  DeleteSuccessIwe7Apps,
  DeleteFailIwe7Apps,
  ClearIwe7Apps,
  ClearSuccessIwe7Apps,
  ClearFailIwe7Apps
} from '../actions/iwe7-app.actions';
import { Iwe7Util2Service, Iwe7Response } from 'iwe7-util2';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Iwe7App } from '../models/iwe7-app.model';
import { Router } from '@angular/router';

@Injectable()
export class Iwe7AppEffects {
  @Effect()
  LoadIwe7Apps$: Observable<Action> = this.actions$.ofType(Iwe7AppActionTypes.LoadIwe7Apps).pipe(
    map((res: LoadIwe7Apps) => res.payload),
    switchMap(res => this.util.wpost('Iwe7App', 'LoadIwe7Apps', res)),
    map((res: Iwe7Response<{ list: Iwe7App[], total: number }>) => {
      if (res.code === 0) {
        return new LoadSuccessIwe7Apps({ Iwe7Apps: res.data.list, total: res.data.total });
      } else {
        return new LoadFailIwe7Apps({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7Apps({ msg: err }))),
  );
  @Effect()
  AddIwe7App$: Observable<Action> = this.actions$.ofType(Iwe7AppActionTypes.AddIwe7App).pipe(
    map((res: AddIwe7App) => res.payload),
    switchMap(res => this.util.wpost('Iwe7App', 'AddIwe7App', res)),
    map((res: Iwe7Response<Iwe7App>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7App({ Iwe7App: res.data });
      } else {
        return new AddFailIwe7App({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7Apps({ msg: err }))),
  );
  @Effect()
  AddIwe7Apps$: Observable<Action> = this.actions$.ofType(Iwe7AppActionTypes.AddIwe7Apps).pipe(
    map((res: AddIwe7Apps) => res.payload),
    switchMap(res => this.util.wpost('Iwe7App', 'AddIwe7Apps', res)),
    map((res: Iwe7Response<Iwe7App[]>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7Apps({ Iwe7Apps: res.data });
      } else {
        return new AddFailIwe7Apps({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7Apps({ msg: err }))),
  );
  @Effect()
  UpsertIwe7App$: Observable<Action> = this.actions$.ofType(Iwe7AppActionTypes.UpsertIwe7App).pipe(
    map((res: UpsertIwe7App) => res.payload),
    switchMap(res => this.util.wpost('Iwe7App', 'UpsertIwe7App', res)),
    map((res: Iwe7Response<Iwe7App>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7App({ Iwe7App: res.data });
      } else {
        return new UpsertFailIwe7App({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7App({ msg: err }))),
  );
  @Effect()
  UpsertIwe7Apps$: Observable<Action> = this.actions$.ofType(Iwe7AppActionTypes.UpsertIwe7Apps).pipe(
    map((res: UpsertIwe7Apps) => res.payload),
    switchMap(res => this.util.wpost('Iwe7App', 'UpsertIwe7Apps', res)),
    map((res: Iwe7Response<Iwe7App[]>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7Apps({ Iwe7Apps: res.data });
      } else {
        return new UpsertFailIwe7Apps({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7Apps({ msg: err }))),
  );
  @Effect()
  UpdateIwe7App$: Observable<Action> = this.actions$.ofType(Iwe7AppActionTypes.UpdateIwe7App).pipe(
    map((res: UpdateIwe7App) => res.payload),
    switchMap(res => this.util.wpost('Iwe7App', 'UpdateIwe7App', res)),
    map((res: Iwe7Response<Update<Iwe7App>>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7App({ Iwe7App: res.data });
      } else {
        return new UpdateFailIwe7App({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7App({ msg: err }))),
  );
  @Effect()
  UpdateIwe7Apps$: Observable<Action> = this.actions$.ofType(Iwe7AppActionTypes.UpdateIwe7Apps).pipe(
    map((res: UpdateIwe7Apps) => res.payload),
    switchMap(res => this.util.wpost('Iwe7App', 'UpdateIwe7Apps', res)),
    map((res: Iwe7Response<Update<Iwe7App>[]>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7Apps({ Iwe7Apps: res.data });
      } else {
        return new UpdateFailIwe7Apps({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7Apps({ msg: err }))),
  );
  @Effect()
  DeleteIwe7App$: Observable<Action> = this.actions$.ofType(Iwe7AppActionTypes.DeleteIwe7App).pipe(
    map((res: DeleteIwe7App) => res.payload),
    switchMap(res => this.util.wpost('Iwe7App', 'DeleteIwe7App', res)),
    map((res: Iwe7Response<string>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7App({ id: res.data });
      } else {
        return new DeleteFailIwe7App({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7App({ msg: err }))),
  );
  @Effect()
  DeleteIwe7Apps$: Observable<Action> = this.actions$.ofType(Iwe7AppActionTypes.DeleteIwe7Apps).pipe(
    map((res: DeleteIwe7Apps) => res.payload),
    switchMap(res => this.util.wpost('Iwe7App', 'DeleteIwe7Apps', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7Apps({ ids: res.data });
      } else {
        return new DeleteFailIwe7Apps({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7App({ msg: err }))),
  );
  @Effect()
  ClearIwe7Apps$: Observable<Action> = this.actions$.ofType(Iwe7AppActionTypes.ClearIwe7Apps).pipe(
    switchMap(res => this.util.wpost('Iwe7App', 'ClearIwe7Apps', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new ClearSuccessIwe7Apps();
      } else {
        return new ClearFailIwe7Apps({ msg: res.msg });
      }
    }),
    catchError(err => of(new ClearFailIwe7Apps({ msg: err }))),
  );

  @Effect()
  SelectIwe7App$: Observable<Action> = this.actions$.ofType(Iwe7AppActionTypes.SelectIwe7App).pipe(
    map((res: SelectIwe7App) => res.payload),
    switchMap(res => of(new SelectSuccessIwe7App({ id: res.id }))),
    tap((res: SelectSuccessIwe7App) => {
      this.router.navigate(['/app/page', res.payload.id]);
    }),
    catchError(err => of(new SelectFailIwe7App({ msg: err }))),
  );
  constructor(private actions$: Actions, public util: Iwe7Util2Service, public router: Router) { }
}
