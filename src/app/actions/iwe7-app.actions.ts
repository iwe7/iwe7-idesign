import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7App } from '../models/iwe7-app.model';

export enum Iwe7AppActionTypes {
  LoadIwe7Apps = '[Iwe7App] Load Iwe7Apps',
  LoadSuccessIwe7Apps = '[Iwe7App] Load Success Iwe7Apps',
  LoadFailIwe7Apps = '[Iwe7App] Load Fail Iwe7Apps',
  AddIwe7App = '[Iwe7App] Add Iwe7App',
  AddSuccessIwe7App = '[Iwe7App] Add Success Iwe7App',
  AddFailIwe7App = '[Iwe7App] Add Fail Iwe7App',
  UpsertIwe7App = '[Iwe7App] Upsert Iwe7App',
  UpsertSuccessIwe7App = '[Iwe7App] Upsert Success Iwe7App',
  UpsertFailIwe7App = '[Iwe7App] Upsert Fail Iwe7App',
  AddIwe7Apps = '[Iwe7App] Add Iwe7Apps',
  AddSuccessIwe7Apps = '[Iwe7App] Add Success Iwe7Apps',
  AddFailIwe7Apps = '[Iwe7App] Add Fail Iwe7Apps',
  UpsertIwe7Apps = '[Iwe7App] Upsert Iwe7Apps',
  UpsertSuccessIwe7Apps = '[Iwe7App] Upsert Success Iwe7Apps',
  UpsertFailIwe7Apps = '[Iwe7App] Upsert Fail Iwe7Apps',
  UpdateIwe7App = '[Iwe7App] Update Iwe7App',
  UpdateSuccessIwe7App = '[Iwe7App] Update Success Iwe7App',
  UpdateFailIwe7App = '[Iwe7App] Update Fail Iwe7App',
  UpdateIwe7Apps = '[Iwe7App] Update Iwe7Apps',
  UpdateSuccessIwe7Apps = '[Iwe7App] Update Success Iwe7Apps',
  UpdateFailIwe7Apps = '[Iwe7App] Update Fail Iwe7Apps',
  DeleteIwe7App = '[Iwe7App] Delete Iwe7App',
  DeleteSuccessIwe7App = '[Iwe7App] Delete Success Iwe7App',
  DeleteFailIwe7App = '[Iwe7App] Delete Fail Iwe7App',
  DeleteIwe7Apps = '[Iwe7App] Delete Iwe7Apps',
  DeleteSuccessIwe7Apps = '[Iwe7App] Delete Success Iwe7Apps',
  DeleteFailIwe7Apps = '[Iwe7App] Delete Fail Iwe7Apps',
  ClearIwe7Apps = '[Iwe7App] Clear Iwe7Apps',
  ClearSuccessIwe7Apps = '[Iwe7App] Clear Success Iwe7Apps',
  ClearFailIwe7Apps = '[Iwe7App] Clear Fail Iwe7Apps',
  SelectIwe7App = '[Iwe7App] Select Iwe7Apps',
  SelectFailIwe7App = '[Iwe7App] Select Fail Iwe7Apps',
  SelectSuccessIwe7App = '[Iwe7App] Select Success Iwe7Apps',
}

export class LoadIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.LoadIwe7Apps;

  constructor(public payload: { [key: string]: any }) { }
}

export class LoadSuccessIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.LoadSuccessIwe7Apps;
  constructor(public payload: { Iwe7Apps: Iwe7App[], total: number }) { }
}

export class LoadFailIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.LoadFailIwe7Apps;

  constructor(public payload: { msg: any }) { }
}

export class AddIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.AddIwe7App;

  constructor(public payload: { Iwe7App: Iwe7App }) { }
}

export class AddSuccessIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.AddSuccessIwe7App;

  constructor(public payload: { Iwe7App: Iwe7App }) { }
}

export class AddFailIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.AddFailIwe7App;

  constructor(public payload: { msg: any }) { }
}

export class UpsertIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.UpsertIwe7App;

  constructor(public payload: { Iwe7App: Iwe7App }) { }
}

export class UpsertSuccessIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.UpsertSuccessIwe7App;

  constructor(public payload: { Iwe7App: Iwe7App }) { }
}

export class UpsertFailIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.UpsertFailIwe7App;

  constructor(public payload: { msg: any }) { }
}

export class AddIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.AddIwe7Apps;

  constructor(public payload: { Iwe7Apps: Iwe7App[] }) { }
}

export class AddSuccessIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.AddSuccessIwe7Apps;

  constructor(public payload: { Iwe7Apps: Iwe7App[] }) { }
}

export class AddFailIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.AddFailIwe7Apps;

  constructor(public payload: { msg: any }) { }
}

export class UpsertIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.UpsertIwe7Apps;

  constructor(public payload: { Iwe7Apps: Iwe7App[] }) { }
}

export class UpsertSuccessIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.UpsertSuccessIwe7Apps;

  constructor(public payload: { Iwe7Apps: Iwe7App[] }) { }
}

export class UpsertFailIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.UpsertFailIwe7Apps;

  constructor(public payload: { msg: any }) { }
}

export class UpdateIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.UpdateIwe7App;

  constructor(public payload: { Iwe7App: Update<Iwe7App> }) { }
}

export class UpdateSuccessIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.UpdateSuccessIwe7App;

  constructor(public payload: { Iwe7App: Update<Iwe7App> }) { }
}

export class UpdateFailIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.UpdateFailIwe7App;

  constructor(public payload: { msg: any }) { }
}

export class UpdateIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.UpdateIwe7Apps;

  constructor(public payload: { Iwe7Apps: Update<Iwe7App>[] }) { }
}

export class UpdateSuccessIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.UpdateSuccessIwe7Apps;

  constructor(public payload: { Iwe7Apps: Update<Iwe7App>[] }) { }
}

export class UpdateFailIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.UpdateFailIwe7Apps;

  constructor(public payload: { msg: any }) { }
}

export class SelectIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.SelectIwe7App;
  constructor(public payload: { id: string }) { }
}

export class SelectFailIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.SelectFailIwe7App;
  constructor(public payload: { msg: any }) { }
}

export class SelectSuccessIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.SelectSuccessIwe7App;
  constructor(public payload: { id: string }) { }
}

export class DeleteIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.DeleteIwe7App;

  constructor(public payload: { id: string }) { }
}

export class DeleteSuccessIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.DeleteSuccessIwe7App;

  constructor(public payload: { id: string }) { }
}

export class DeleteFailIwe7App implements Action {
  readonly type = Iwe7AppActionTypes.DeleteFailIwe7App;

  constructor(public payload: { msg: any }) { }
}

export class DeleteIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.DeleteIwe7Apps;

  constructor(public payload: { ids: string[] }) { }
}

export class DeleteSuccessIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.DeleteSuccessIwe7Apps;

  constructor(public payload: { ids: string[] }) { }
}

export class DeleteFailIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.DeleteFailIwe7Apps;

  constructor(public payload: { msg: any }) { }
}

export class ClearIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.ClearIwe7Apps;
}

export class ClearSuccessIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.ClearSuccessIwe7Apps;
}

export class ClearFailIwe7Apps implements Action {
  readonly type = Iwe7AppActionTypes.ClearFailIwe7Apps;
  constructor(public payload: { msg: any }) { }
}

export type Iwe7AppActions =
  LoadIwe7Apps
  | LoadSuccessIwe7Apps
  | LoadFailIwe7Apps

  | AddIwe7App
  | AddSuccessIwe7App
  | AddFailIwe7App

  | UpsertIwe7App
  | UpsertSuccessIwe7App
  | UpsertFailIwe7App

  | AddIwe7Apps
  | AddSuccessIwe7Apps
  | AddFailIwe7Apps

  | UpsertIwe7Apps
  | UpsertSuccessIwe7Apps
  | UpsertFailIwe7Apps

  | UpdateIwe7App
  | UpdateSuccessIwe7App
  | UpdateFailIwe7App

  | UpdateIwe7Apps
  | UpdateSuccessIwe7Apps
  | UpdateFailIwe7Apps

  | DeleteIwe7App
  | DeleteSuccessIwe7App
  | DeleteFailIwe7App

  | DeleteIwe7Apps
  | DeleteSuccessIwe7Apps
  | DeleteFailIwe7Apps

  | ClearIwe7Apps
  | ClearSuccessIwe7Apps
  | ClearFailIwe7Apps

  | SelectIwe7App
  | SelectSuccessIwe7App
  | SelectFailIwe7App;
