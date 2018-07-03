import { NzMessageService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import {
  Iwe7AppContentActions,
  Iwe7AppContentActionTypes,
  LoadIwe7AppContents,
  LoadSuccessIwe7AppContents,
  LoadFailIwe7AppContents,
  AddIwe7AppContents,
  AddSuccessIwe7AppContents,
  AddFailIwe7AppContents,
  AddIwe7AppContent,
  AddSuccessIwe7AppContent,
  AddFailIwe7AppContent,
  UpsertIwe7AppContent,
  UpsertSuccessIwe7AppContent,
  UpsertFailIwe7AppContent,
  UpsertIwe7AppContents,
  UpsertSuccessIwe7AppContents,
  UpsertFailIwe7AppContents,
  UpdateIwe7AppContent,
  UpdateSuccessIwe7AppContent,
  UpdateFailIwe7AppContent,
  UpdateIwe7AppContents,
  UpdateSuccessIwe7AppContents,
  UpdateFailIwe7AppContents,
  DeleteIwe7AppContent,
  DeleteSuccessIwe7AppContent,
  DeleteFailIwe7AppContent,
  DeleteIwe7AppContents,
  DeleteSuccessIwe7AppContents,
  DeleteFailIwe7AppContents,
  ClearIwe7AppContents,
  ClearSuccessIwe7AppContents,
  ClearFailIwe7AppContents
} from '../actions/iwe7-app-content.actions';
import { Iwe7Util2Service, Iwe7Response } from 'iwe7-util2';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Iwe7AppContent } from '../models/iwe7-app-content.model';

@Injectable()
export class Iwe7AppContentEffects {
  @Effect()
  LoadIwe7AppContents$: Observable<Action> = this.actions$.ofType(Iwe7AppContentActionTypes.LoadIwe7AppContents).pipe(
    map((res: LoadIwe7AppContents) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppContent', 'LoadIwe7AppContents', res)),
    map((res: Iwe7Response<{ list: Iwe7AppContent[], total: number }>) => {
      if (res.code === 0) {
        return new LoadSuccessIwe7AppContents({ Iwe7AppContents: res.data.list, total: res.data.total });
      } else {
        return new LoadFailIwe7AppContents({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7AppContents({ msg: err }))),
  );
  @Effect()
  AddIwe7AppContent$: Observable<Action> = this.actions$.ofType(Iwe7AppContentActionTypes.AddIwe7AppContent).pipe(
    map((res: AddIwe7AppContent) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppContent', 'AddIwe7AppContent', res)),
    map((res: Iwe7Response<Iwe7AppContent>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7AppContent({ Iwe7AppContent: res.data });
      } else {
        return new AddFailIwe7AppContent({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7AppContents({ msg: err }))),
  );
  @Effect()
  AddIwe7AppContents$: Observable<Action> = this.actions$.ofType(Iwe7AppContentActionTypes.AddIwe7AppContents).pipe(
    map((res: AddIwe7AppContents) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppContent', 'AddIwe7AppContents', res)),
    map((res: Iwe7Response<Iwe7AppContent[]>) => {
      if (res.code === 0) {
        return new AddSuccessIwe7AppContents({ Iwe7AppContents: res.data });
      } else {
        return new AddFailIwe7AppContents({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFailIwe7AppContents({ msg: err }))),
  );
  @Effect()
  UpsertIwe7AppContent$: Observable<Action> = this.actions$.ofType(Iwe7AppContentActionTypes.UpsertIwe7AppContent).pipe(
    map((res: UpsertIwe7AppContent) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppContent', 'UpsertIwe7AppContent', res)),
    map((res: Iwe7Response<Iwe7AppContent>) => {
      if (res.code === 0) {
        this.msg.success('操作成功');
        return new UpsertSuccessIwe7AppContent({ Iwe7AppContent: res.data });
      } else {
        return new UpsertFailIwe7AppContent({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7AppContent({ msg: err }))),
  );
  @Effect()
  UpsertIwe7AppContents$: Observable<Action> = this.actions$.ofType(Iwe7AppContentActionTypes.UpsertIwe7AppContents).pipe(
    map((res: UpsertIwe7AppContents) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppContent', 'UpsertIwe7AppContents', res)),
    map((res: Iwe7Response<Iwe7AppContent[]>) => {
      if (res.code === 0) {
        return new UpsertSuccessIwe7AppContents({ Iwe7AppContents: res.data });
      } else {
        return new UpsertFailIwe7AppContents({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFailIwe7AppContents({ msg: err }))),
  );
  @Effect()
  UpdateIwe7AppContent$: Observable<Action> = this.actions$.ofType(Iwe7AppContentActionTypes.UpdateIwe7AppContent).pipe(
    map((res: UpdateIwe7AppContent) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppContent', 'UpdateIwe7AppContent', res)),
    map((res: Iwe7Response<Update<Iwe7AppContent>>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7AppContent({ Iwe7AppContent: res.data });
      } else {
        return new UpdateFailIwe7AppContent({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7AppContent({ msg: err }))),
  );
  @Effect()
  UpdateIwe7AppContents$: Observable<Action> = this.actions$.ofType(Iwe7AppContentActionTypes.UpdateIwe7AppContents).pipe(
    map((res: UpdateIwe7AppContents) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppContent', 'UpdateIwe7AppContents', res)),
    map((res: Iwe7Response<Update<Iwe7AppContent>[]>) => {
      if (res.code === 0) {
        return new UpdateSuccessIwe7AppContents({ Iwe7AppContents: res.data });
      } else {
        return new UpdateFailIwe7AppContents({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFailIwe7AppContents({ msg: err }))),
  );
  @Effect()
  DeleteIwe7AppContent$: Observable<Action> = this.actions$.ofType(Iwe7AppContentActionTypes.DeleteIwe7AppContent).pipe(
    map((res: DeleteIwe7AppContent) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppContent', 'DeleteIwe7AppContent', res)),
    map((res: Iwe7Response<string>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7AppContent({ id: res.data });
      } else {
        return new DeleteFailIwe7AppContent({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7AppContent({ msg: err }))),
  );
  @Effect()
  DeleteIwe7AppContents$: Observable<Action> = this.actions$.ofType(Iwe7AppContentActionTypes.DeleteIwe7AppContents).pipe(
    map((res: DeleteIwe7AppContents) => res.payload),
    switchMap(res => this.util.wpost('Iwe7AppContent', 'DeleteIwe7AppContents', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new DeleteSuccessIwe7AppContents({ ids: res.data });
      } else {
        return new DeleteFailIwe7AppContents({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFailIwe7AppContent({ msg: err }))),
  );
  @Effect()
  ClearIwe7AppContents$: Observable<Action> = this.actions$.ofType(Iwe7AppContentActionTypes.ClearIwe7AppContents).pipe(
    switchMap(res => this.util.wpost('Iwe7AppContent', 'ClearIwe7AppContents', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new ClearSuccessIwe7AppContents();
      } else {
        return new ClearFailIwe7AppContents({ msg: res.msg });
      }
    }),
    catchError(err => of(new ClearFailIwe7AppContents({ msg: err }))),
  );
  constructor(
    private actions$: Actions,
    public util: Iwe7Util2Service,
    public msg: NzMessageService
  ) {}
}
