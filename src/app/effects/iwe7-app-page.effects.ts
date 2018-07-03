import { NzMessageService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import {
  Iwe7AppPageActions,
  Iwe7AppPageActionTypes,
  LoadIwe7AppPages,
  LoadSuccessIwe7AppPages,
  LoadFailIwe7AppPages,
  AddIwe7AppPages,
  AddSuccessIwe7AppPages,
  AddFailIwe7AppPages,
  AddIwe7AppPage,
  AddSuccessIwe7AppPage,
  AddFailIwe7AppPage,
  UpsertIwe7AppPage,
  UpsertSuccessIwe7AppPage,
  UpsertFailIwe7AppPage,
  UpsertIwe7AppPages,
  UpsertSuccessIwe7AppPages,
  UpsertFailIwe7AppPages,
  UpdateIwe7AppPage,
  UpdateSuccessIwe7AppPage,
  UpdateFailIwe7AppPage,
  UpdateIwe7AppPages,
  UpdateSuccessIwe7AppPages,
  UpdateFailIwe7AppPages,
  DeleteIwe7AppPage,
  DeleteSuccessIwe7AppPage,
  DeleteFailIwe7AppPage,
  DeleteIwe7AppPages,
  DeleteSuccessIwe7AppPages,
  DeleteFailIwe7AppPages,
  ClearIwe7AppPages,
  ClearSuccessIwe7AppPages,
  ClearFailIwe7AppPages
} from '../actions/iwe7-app-page.actions';
import { Iwe7Util2Service, Iwe7Response } from 'iwe7-util2';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Iwe7AppPage } from '../models/iwe7-app-page.model';

@Injectable()
export class Iwe7AppPageEffects {
  @Effect()
  LoadIwe7AppPages$: Observable<Action> = this.actions$.ofType(Iwe7AppPageActionTypes.LoadIwe7AppPages).pipe(
    map((res: LoadIwe7AppPages) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppPage', 'LoadIwe7AppPages', res)),
    map((res: Iwe7Response<{ list: Iwe7AppPage[], total: number }>) => {
      if (res.code === 0) {
        return new LoadSuccessIwe7AppPages({ Iwe7AppPages: res.data.list, total: res.data.total });
      } else {
        return new LoadFailIwe7AppPages({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7AppPages({ msg: err }))),
  );
  @Effect()
  AddIwe7AppPage$: Observable<Action> = this.actions$.ofType(Iwe7AppPageActionTypes.AddIwe7AppPage).pipe(
    map((res: AddIwe7AppPage) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppPage', 'AddIwe7AppPage', res)),
    map((res: Iwe7Response<Iwe7AppPage>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7AppPage({ Iwe7AppPage: res.data });
      } else {
        return new AddFailIwe7AppPage({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7AppPages({ msg: err }))),
  );
  @Effect()
  AddIwe7AppPages$: Observable<Action> = this.actions$.ofType(Iwe7AppPageActionTypes.AddIwe7AppPages).pipe(
    map((res: AddIwe7AppPages) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppPage', 'AddIwe7AppPages', res)),
    map((res: Iwe7Response<Iwe7AppPage[]>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7AppPages({ Iwe7AppPages: res.data });
      } else {
        return new AddFailIwe7AppPages({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7AppPages({ msg: err }))),
  );
  @Effect()
  UpsertIwe7AppPage$: Observable<Action> = this.actions$.ofType(Iwe7AppPageActionTypes.UpsertIwe7AppPage).pipe(
    map((res: UpsertIwe7AppPage) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppPage', 'UpsertIwe7AppPage', res)),
    map((res: Iwe7Response<Iwe7AppPage>) => {
      if (res.code === 0) {
        this.msg.success('操作成功');
        return new UpsertSuccessIwe7AppPage({ Iwe7AppPage: res.data });
      } else {
        return new UpsertFailIwe7AppPage({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7AppPage({ msg: err }))),
  );
  @Effect()
  UpsertIwe7AppPages$: Observable<Action> = this.actions$.ofType(Iwe7AppPageActionTypes.UpsertIwe7AppPages).pipe(
    map((res: UpsertIwe7AppPages) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppPage', 'UpsertIwe7AppPages', res)),
    map((res: Iwe7Response<Iwe7AppPage[]>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7AppPages({ Iwe7AppPages: res.data });
      } else {
        return new UpsertFailIwe7AppPages({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7AppPages({ msg: err }))),
  );
  @Effect()
  UpdateIwe7AppPage$: Observable<Action> = this.actions$.ofType(Iwe7AppPageActionTypes.UpdateIwe7AppPage).pipe(
    map((res: UpdateIwe7AppPage) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppPage', 'UpdateIwe7AppPage', res)),
    map((res: Iwe7Response<Update<Iwe7AppPage>>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7AppPage({ Iwe7AppPage: res.data });
      } else {
        return new UpdateFailIwe7AppPage({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7AppPage({ msg: err }))),
  );
  @Effect()
  UpdateIwe7AppPages$: Observable<Action> = this.actions$.ofType(Iwe7AppPageActionTypes.UpdateIwe7AppPages).pipe(
    map((res: UpdateIwe7AppPages) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppPage', 'UpdateIwe7AppPages', res)),
    map((res: Iwe7Response<Update<Iwe7AppPage>[]>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7AppPages({ Iwe7AppPages: res.data });
      } else {
        return new UpdateFailIwe7AppPages({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7AppPages({ msg: err }))),
  );
  @Effect()
  DeleteIwe7AppPage$: Observable<Action> = this.actions$.ofType(Iwe7AppPageActionTypes.DeleteIwe7AppPage).pipe(
    map((res: DeleteIwe7AppPage) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppPage', 'DeleteIwe7AppPage', res)),
    map((res: Iwe7Response<string>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7AppPage({ id: res.data });
      } else {
        return new DeleteFailIwe7AppPage({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7AppPage({ msg: err }))),
  );
  @Effect()
  DeleteIwe7AppPages$: Observable<Action> = this.actions$.ofType(Iwe7AppPageActionTypes.DeleteIwe7AppPages).pipe(
    map((res: DeleteIwe7AppPages) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppPage', 'DeleteIwe7AppPages', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7AppPages({ ids: res.data });
      } else {
        return new DeleteFailIwe7AppPages({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7AppPage({ msg: err }))),
  );
  @Effect()
  ClearIwe7AppPages$: Observable<Action> = this.actions$.ofType(Iwe7AppPageActionTypes.ClearIwe7AppPages).pipe(
    switchMap(res => this.util.wpost('Iwe7AppPage', 'ClearIwe7AppPages', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new ClearSuccessIwe7AppPages();
      } else {
        return new ClearFailIwe7AppPages({ msg: res.msg });
      }
    }),
    catchError(err => of(new ClearFailIwe7AppPages({ msg: err }))),
  );
  constructor(
    private actions$: Actions,
    public util: Iwe7Util2Service,
    public msg: NzMessageService
  ) { }
}
