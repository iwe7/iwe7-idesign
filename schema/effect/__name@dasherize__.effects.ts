import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import {
  <%= classify(name) %>Actions,
  <%= classify(name) %>ActionTypes,
  Load<%= classify(name) %>s,
  LoadSuccess<%= classify(name) %>s,
  LoadFail<%= classify(name) %>s,
  Add<%= classify(name) %>s,
  AddSuccess<%= classify(name) %>s,
  AddFail<%= classify(name) %>s,
  Add<%= classify(name) %>,
  AddSuccess<%= classify(name) %>,
  AddFail<%= classify(name) %>,
  Upsert<%= classify(name) %>,
  UpsertSuccess<%= classify(name) %>,
  UpsertFail<%= classify(name) %>,
  Upsert<%= classify(name) %>s,
  UpsertSuccess<%= classify(name) %>s,
  UpsertFail<%= classify(name) %>s,
  Update<%= classify(name) %>,
  UpdateSuccess<%= classify(name) %>,
  UpdateFail<%= classify(name) %>,
  Update<%= classify(name) %>s,
  UpdateSuccess<%= classify(name) %>s,
  UpdateFail<%= classify(name) %>s,
  Delete<%= classify(name) %>,
  DeleteSuccess<%= classify(name) %>,
  DeleteFail<%= classify(name) %>,
  Delete<%= classify(name) %>s,
  DeleteSuccess<%= classify(name) %>s,
  DeleteFail<%= classify(name) %>s,
  Clear<%= classify(name) %>s,
  ClearSuccess<%= classify(name) %>s,
  ClearFail<%= classify(name) %>s
} from '<%= featurePath(group, flat, "actions", dasherize(name)) %><%= dasherize(name) %>.actions';
import { Iwe7Util2Service, Iwe7Response } from 'iwe7-util2';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { <%= classify(name) %> } from '<%= featurePath(group, flat, "models", dasherize(name)) %><%= dasherize(name) %>.model';

@Injectable()
export class <%= classify(name) %>Effects {
  @Effect()
  Load<%= classify(name) %>s$: Observable<Action> = this.actions$.ofType(<%= classify(name) %>ActionTypes.Load<%= classify(name) %>s).pipe(
    map((res: Load<%= classify(name) %>s) => res.payload),
    switchMap(res => this.util.wpost('<%= classify(name) %>', 'Load<%= classify(name) %>s', res)),
    map((res: Iwe7Response<{ list: <%= classify(name) %>[], total: number }>) => {
      if (res.code === 0) {
        return new LoadSuccess<%= classify(name) %>s({ <%= classify(name) %>s: res.data.list, total: res.data.total });
      } else {
        return new LoadFail<%= classify(name) %>s({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFail<%= classify(name) %>s({ msg: err }))),
  );
  @Effect()
  Add<%= classify(name) %>$: Observable<Action> = this.actions$.ofType(<%= classify(name) %>ActionTypes.Add<%= classify(name) %>).pipe(
    map((res: Add<%= classify(name) %>) => res.payload),
    switchMap(res => this.util.wpost('<%= classify(name) %>', 'Add<%= classify(name) %>', res)),
    map((res: Iwe7Response<<%= classify(name) %>>) => {
      if (res.code === 0) {
        return new AddSuccess<%= classify(name) %>({ <%= classify(name) %>: res.data });
      } else {
        return new AddFail<%= classify(name) %>({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFail<%= classify(name) %>s({ msg: err }))),
  );
  @Effect()
  Add<%= classify(name) %>s$: Observable<Action> = this.actions$.ofType(<%= classify(name) %>ActionTypes.Add<%= classify(name) %>s).pipe(
    map((res: Add<%= classify(name) %>s) => res.payload),
    switchMap(res => this.util.wpost('<%= classify(name) %>', 'Add<%= classify(name) %>s', res)),
    map((res: Iwe7Response<<%= classify(name) %>[]>) => {
      if (res.code === 0) {
        return new AddSuccess<%= classify(name) %>s({ <%= classify(name) %>s: res.data });
      } else {
        return new AddFail<%= classify(name) %>s({ msg: res.msg });
      }
    }),
    catchError(err => of(new LoadFail<%= classify(name) %>s({ msg: err }))),
  );
  @Effect()
  Upsert<%= classify(name) %>$: Observable<Action> = this.actions$.ofType(<%= classify(name) %>ActionTypes.Upsert<%= classify(name) %>).pipe(
    map((res: Upsert<%= classify(name) %>) => res.payload),
    switchMap(res => this.util.wpost('<%= classify(name) %>', 'Upsert<%= classify(name) %>', res)),
    map((res: Iwe7Response<<%= classify(name) %>>) => {
      if (res.code === 0) {
        return new UpsertSuccess<%= classify(name) %>({ <%= classify(name) %>: res.data });
      } else {
        return new UpsertFail<%= classify(name) %>({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFail<%= classify(name) %>({ msg: err }))),
  );
  @Effect()
  Upsert<%= classify(name) %>s$: Observable<Action> = this.actions$.ofType(<%= classify(name) %>ActionTypes.Upsert<%= classify(name) %>s).pipe(
    map((res: Upsert<%= classify(name) %>s) => res.payload),
    switchMap(res => this.util.wpost('<%= classify(name) %>', 'Upsert<%= classify(name) %>s', res)),
    map((res: Iwe7Response<<%= classify(name) %>[]>) => {
      if (res.code === 0) {
        return new UpsertSuccess<%= classify(name) %>s({ <%= classify(name) %>s: res.data });
      } else {
        return new UpsertFail<%= classify(name) %>s({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpsertFail<%= classify(name) %>s({ msg: err }))),
  );
  @Effect()
  Update<%= classify(name) %>$: Observable<Action> = this.actions$.ofType(<%= classify(name) %>ActionTypes.Update<%= classify(name) %>).pipe(
    map((res: Update<%= classify(name) %>) => res.payload),
    switchMap(res => this.util.wpost('<%= classify(name) %>', 'Update<%= classify(name) %>', res)),
    map((res: Iwe7Response<Update<<%= classify(name) %>>>) => {
      if (res.code === 0) {
        return new UpdateSuccess<%= classify(name) %>({ <%= classify(name) %>: res.data });
      } else {
        return new UpdateFail<%= classify(name) %>({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFail<%= classify(name) %>({ msg: err }))),
  );
  @Effect()
  Update<%= classify(name) %>s$: Observable<Action> = this.actions$.ofType(<%= classify(name) %>ActionTypes.Update<%= classify(name) %>s).pipe(
    map((res: Update<%= classify(name) %>s) => res.payload),
    switchMap(res => this.util.wpost('<%= classify(name) %>', 'Update<%= classify(name) %>s', res)),
    map((res: Iwe7Response<Update<<%= classify(name) %>>[]>) => {
      if (res.code === 0) {
        return new UpdateSuccess<%= classify(name) %>s({ <%= classify(name) %>s: res.data });
      } else {
        return new UpdateFail<%= classify(name) %>s({ msg: res.msg });
      }
    }),
    catchError(err => of(new UpdateFail<%= classify(name) %>s({ msg: err }))),
  );
  @Effect()
  Delete<%= classify(name) %>$: Observable<Action> = this.actions$.ofType(<%= classify(name) %>ActionTypes.Delete<%= classify(name) %>).pipe(
    map((res: Delete<%= classify(name) %>) => res.payload),
    switchMap(res => this.util.wpost('<%= classify(name) %>', 'Delete<%= classify(name) %>', res)),
    map((res: Iwe7Response<string>) => {
      if (res.code === 0) {
        return new DeleteSuccess<%= classify(name) %>({ id: res.data });
      } else {
        return new DeleteFail<%= classify(name) %>({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFail<%= classify(name) %>({ msg: err }))),
  );
  @Effect()
  Delete<%= classify(name) %>s$: Observable<Action> = this.actions$.ofType(<%= classify(name) %>ActionTypes.Delete<%= classify(name) %>s).pipe(
    map((res: Delete<%= classify(name) %>s) => res.payload),
    switchMap(res => this.util.wpost('<%= classify(name) %>', 'Delete<%= classify(name) %>s', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new DeleteSuccess<%= classify(name) %>s({ ids: res.data });
      } else {
        return new DeleteFail<%= classify(name) %>s({ msg: res.msg });
      }
    }),
    catchError(err => of(new DeleteFail<%= classify(name) %>({ msg: err }))),
  );
  @Effect()
  Clear<%= classify(name) %>s$: Observable<Action> = this.actions$.ofType(<%= classify(name) %>ActionTypes.Clear<%= classify(name) %>s).pipe(
    switchMap(res => this.util.wpost('<%= classify(name) %>', 'Clear<%= classify(name) %>s', res)),
    map((res: Iwe7Response<string[]>) => {
      if (res.code === 0) {
        return new ClearSuccess<%= classify(name) %>s();
      } else {
        return new ClearFail<%= classify(name) %>s({ msg: res.msg });
      }
    }),
    catchError(err => of(new ClearFail<%= classify(name) %>s({ msg: err }))),
  );
  constructor(private actions$: Actions, public util: Iwe7Util2Service) {}
}
