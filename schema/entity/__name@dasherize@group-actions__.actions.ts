import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { <%= classify(name) %> } from '<%= featurePath(group, flat, "models", dasherize(name)) %><%= dasherize(name) %>.model';

export enum <%= classify(name) %>ActionTypes {
  Load<%= classify(name) %>s = '[<%= classify(name) %>] Load <%= classify(name) %>s',
  LoadSuccess<%= classify(name) %>s = '[<%= classify(name) %>] Load Success <%= classify(name) %>s',
  LoadFail<%= classify(name) %>s = '[<%= classify(name) %>] Load Fail <%= classify(name) %>s',
  Add<%= classify(name) %> = '[<%= classify(name) %>] Add <%= classify(name) %>',
  AddSuccess<%= classify(name) %> = '[<%= classify(name) %>] Add Success <%= classify(name) %>',
  AddFail<%= classify(name) %> = '[<%= classify(name) %>] Add Fail <%= classify(name) %>',
  Upsert<%= classify(name) %> = '[<%= classify(name) %>] Upsert <%= classify(name) %>',
  UpsertSuccess<%= classify(name) %> = '[<%= classify(name) %>] Upsert Success <%= classify(name) %>',
  UpsertFail<%= classify(name) %> = '[<%= classify(name) %>] Upsert Fail <%= classify(name) %>',
  Add<%= classify(name) %>s = '[<%= classify(name) %>] Add <%= classify(name) %>s',
  AddSuccess<%= classify(name) %>s = '[<%= classify(name) %>] Add Success <%= classify(name) %>s',
  AddFail<%= classify(name) %>s = '[<%= classify(name) %>] Add Fail <%= classify(name) %>s',
  Upsert<%= classify(name) %>s = '[<%= classify(name) %>] Upsert <%= classify(name) %>s',
  UpsertSuccess<%= classify(name) %>s = '[<%= classify(name) %>] Upsert Success <%= classify(name) %>s',
  UpsertFail<%= classify(name) %>s = '[<%= classify(name) %>] Upsert Fail <%= classify(name) %>s',
  Update<%= classify(name) %> = '[<%= classify(name) %>] Update <%= classify(name) %>',
  UpdateSuccess<%= classify(name) %> = '[<%= classify(name) %>] Update Success <%= classify(name) %>',
  UpdateFail<%= classify(name) %> = '[<%= classify(name) %>] Update Fail <%= classify(name) %>',
  Update<%= classify(name) %>s = '[<%= classify(name) %>] Update <%= classify(name) %>s',
  UpdateSuccess<%= classify(name) %>s = '[<%= classify(name) %>] Update Success <%= classify(name) %>s',
  UpdateFail<%= classify(name) %>s = '[<%= classify(name) %>] Update Fail <%= classify(name) %>s',
  Delete<%= classify(name) %> = '[<%= classify(name) %>] Delete <%= classify(name) %>',
  DeleteSuccess<%= classify(name) %> = '[<%= classify(name) %>] Delete Success <%= classify(name) %>',
  DeleteFail<%= classify(name) %> = '[<%= classify(name) %>] Delete Fail <%= classify(name) %>',
  Delete<%= classify(name) %>s = '[<%= classify(name) %>] Delete <%= classify(name) %>s',
  DeleteSuccess<%= classify(name) %>s = '[<%= classify(name) %>] Delete Success <%= classify(name) %>s',
  DeleteFail<%= classify(name) %>s = '[<%= classify(name) %>] Delete Fail <%= classify(name) %>s',
  Clear<%= classify(name) %>s = '[<%= classify(name) %>] Clear <%= classify(name) %>s',
  ClearSuccess<%= classify(name) %>s = '[<%= classify(name) %>] Clear Success <%= classify(name) %>s',
  ClearFail<%= classify(name) %>s = '[<%= classify(name) %>] Clear Fail <%= classify(name) %>s',
  Select<%= classify(name) %> = '[<%= classify(name) %>] Select <%= classify(name) %>s',
}

export class Load<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Load<%= classify(name) %>s;

  constructor(public payload: { [key: string]: any }) {}
}

export class LoadSuccess<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.LoadSuccess<%= classify(name) %>s;
  constructor(public payload: { <%= classify(name) %>s: <%= classify(name) %>[], total: number }) {}
}

export class LoadFail<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.LoadFail<%= classify(name) %>s;

  constructor(public payload: { msg: any }) {}
}

export class Add<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Add<%= classify(name) %>;

  constructor(public payload: { <%= classify(name) %>: <%= classify(name) %> }) {}
}

export class AddSuccess<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.AddSuccess<%= classify(name) %>;

  constructor(public payload: { <%= classify(name) %>: <%= classify(name) %> }) {}
}

export class AddFail<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.AddFail<%= classify(name) %>;

  constructor(public payload: { msg: any }) {}
}

export class Upsert<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Upsert<%= classify(name) %>;

  constructor(public payload: { <%= classify(name) %>: <%= classify(name) %> }) {}
}

export class UpsertSuccess<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UpsertSuccess<%= classify(name) %>;

  constructor(public payload: { <%= classify(name) %>: <%= classify(name) %> }) {}
}

export class UpsertFail<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UpsertFail<%= classify(name) %>;

  constructor(public payload: { msg: any }) {}
}

export class Add<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Add<%= classify(name) %>s;

  constructor(public payload: { <%= classify(name) %>s: <%= classify(name) %>[] }) {}
}

export class AddSuccess<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.AddSuccess<%= classify(name) %>s;

  constructor(public payload: { <%= classify(name) %>s: <%= classify(name) %>[] }) {}
}

export class AddFail<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.AddFail<%= classify(name) %>s;

  constructor(public payload: { msg: any }) {}
}

export class Upsert<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Upsert<%= classify(name) %>s;

  constructor(public payload: { <%= classify(name) %>s: <%= classify(name) %>[] }) {}
}

export class UpsertSuccess<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UpsertSuccess<%= classify(name) %>s;

  constructor(public payload: { <%= classify(name) %>s: <%= classify(name) %>[] }) {}
}

export class UpsertFail<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UpsertFail<%= classify(name) %>s;

  constructor(public payload: { msg: any }) {}
}

export class Update<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Update<%= classify(name) %>;

  constructor(public payload: { <%= classify(name) %>: Update<<%= classify(name) %>> }) {}
}

export class UpdateSuccess<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UpdateSuccess<%= classify(name) %>;

  constructor(public payload: { <%= classify(name) %>: Update<<%= classify(name) %>> }) {}
}

export class UpdateFail<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UpdateFail<%= classify(name) %>;

  constructor(public payload: { msg: any }) {}
}

export class Update<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Update<%= classify(name) %>s;

  constructor(public payload: { <%= classify(name) %>s: Update<<%= classify(name) %>>[] }) {}
}

export class UpdateSuccess<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UpdateSuccess<%= classify(name) %>s;

  constructor(public payload: { <%= classify(name) %>s: Update<<%= classify(name) %>>[] }) {}
}

export class UpdateFail<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UpdateFail<%= classify(name) %>s;

  constructor(public payload: { msg: any }) {}
}

export class Select<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Select<%= classify(name) %>;

  constructor(public payload: { id: string }) {}
}

export class Delete<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>;

  constructor(public payload: { id: string }) {}
}

export class DeleteSuccess<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.DeleteSuccess<%= classify(name) %>;

  constructor(public payload: { id: string }) {}
}

export class DeleteFail<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.DeleteFail<%= classify(name) %>;

  constructor(public payload: { msg: any }) {}
}

export class Delete<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>s;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteSuccess<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.DeleteSuccess<%= classify(name) %>s;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteFail<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.DeleteFail<%= classify(name) %>s;

  constructor(public payload: { msg: any }) {}
}

export class Clear<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Clear<%= classify(name) %>s;
}

export class ClearSuccess<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.ClearSuccess<%= classify(name) %>s;
}

export class ClearFail<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.ClearFail<%= classify(name) %>s;
  constructor(public payload: { msg: any }) {}
}

export type <%= classify(name) %>Actions =
 Load<%= classify(name) %>s
 | LoadSuccess<%= classify(name) %>s
 | LoadFail<%= classify(name) %>s

 | Add<%= classify(name) %>
 | AddSuccess<%= classify(name) %>
 | AddFail<%= classify(name) %>

 | Upsert<%= classify(name) %>
 | UpsertSuccess<%= classify(name) %>
 | UpsertFail<%= classify(name) %>

 | Add<%= classify(name) %>s
 | AddSuccess<%= classify(name) %>s
 | AddFail<%= classify(name) %>s

 | Upsert<%= classify(name) %>s
 | UpsertSuccess<%= classify(name) %>s
 | UpsertFail<%= classify(name) %>s

 | Update<%= classify(name) %>
 | UpdateSuccess<%= classify(name) %>
 | UpdateFail<%= classify(name) %>

 | Update<%= classify(name) %>s
 | UpdateSuccess<%= classify(name) %>s
 | UpdateFail<%= classify(name) %>s

 | Delete<%= classify(name) %>
 | DeleteSuccess<%= classify(name) %>
 | DeleteFail<%= classify(name) %>

 | Delete<%= classify(name) %>s
 | DeleteSuccess<%= classify(name) %>s
 | DeleteFail<%= classify(name) %>s

 | Clear<%= classify(name) %>s
 | ClearSuccess<%= classify(name) %>s
 | ClearFail<%= classify(name) %>s

 | Select<%= classify(name) %>;
