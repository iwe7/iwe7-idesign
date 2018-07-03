import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7Components } from '../models/iwe7-components.model';

export enum Iwe7ComponentsActionTypes {
  LoadIwe7Componentss = '[Iwe7Components] Load Iwe7Componentss',
  LoadSuccessIwe7Componentss = '[Iwe7Components] Load Success Iwe7Componentss',
  LoadFailIwe7Componentss = '[Iwe7Components] Load Fail Iwe7Componentss',
  AddIwe7Components = '[Iwe7Components] Add Iwe7Components',
  AddSuccessIwe7Components = '[Iwe7Components] Add Success Iwe7Components',
  AddFailIwe7Components = '[Iwe7Components] Add Fail Iwe7Components',
  UpsertIwe7Components = '[Iwe7Components] Upsert Iwe7Components',
  UpsertSuccessIwe7Components = '[Iwe7Components] Upsert Success Iwe7Components',
  UpsertFailIwe7Components = '[Iwe7Components] Upsert Fail Iwe7Components',
  AddIwe7Componentss = '[Iwe7Components] Add Iwe7Componentss',
  AddSuccessIwe7Componentss = '[Iwe7Components] Add Success Iwe7Componentss',
  AddFailIwe7Componentss = '[Iwe7Components] Add Fail Iwe7Componentss',
  UpsertIwe7Componentss = '[Iwe7Components] Upsert Iwe7Componentss',
  UpsertSuccessIwe7Componentss = '[Iwe7Components] Upsert Success Iwe7Componentss',
  UpsertFailIwe7Componentss = '[Iwe7Components] Upsert Fail Iwe7Componentss',
  UpdateIwe7Components = '[Iwe7Components] Update Iwe7Components',
  UpdateSuccessIwe7Components = '[Iwe7Components] Update Success Iwe7Components',
  UpdateFailIwe7Components = '[Iwe7Components] Update Fail Iwe7Components',
  UpdateIwe7Componentss = '[Iwe7Components] Update Iwe7Componentss',
  UpdateSuccessIwe7Componentss = '[Iwe7Components] Update Success Iwe7Componentss',
  UpdateFailIwe7Componentss = '[Iwe7Components] Update Fail Iwe7Componentss',
  DeleteIwe7Components = '[Iwe7Components] Delete Iwe7Components',
  DeleteSuccessIwe7Components = '[Iwe7Components] Delete Success Iwe7Components',
  DeleteFailIwe7Components = '[Iwe7Components] Delete Fail Iwe7Components',
  DeleteIwe7Componentss = '[Iwe7Components] Delete Iwe7Componentss',
  DeleteSuccessIwe7Componentss = '[Iwe7Components] Delete Success Iwe7Componentss',
  DeleteFailIwe7Componentss = '[Iwe7Components] Delete Fail Iwe7Componentss',
  ClearIwe7Componentss = '[Iwe7Components] Clear Iwe7Componentss',
  ClearSuccessIwe7Componentss = '[Iwe7Components] Clear Success Iwe7Componentss',
  ClearFailIwe7Componentss = '[Iwe7Components] Clear Fail Iwe7Componentss',
  SelectIwe7Components = '[Iwe7Components] Select Iwe7Componentss',
}

export class LoadIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.LoadIwe7Componentss;

  constructor(public payload: { [key: string]: any }) {}
}

export class LoadSuccessIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.LoadSuccessIwe7Componentss;
  constructor(public payload: { Iwe7Componentss: Iwe7Components[], total: number }) {}
}

export class LoadFailIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.LoadFailIwe7Componentss;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.AddIwe7Components;

  constructor(public payload: { Iwe7Components: Iwe7Components }) {}
}

export class AddSuccessIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.AddSuccessIwe7Components;

  constructor(public payload: { Iwe7Components: Iwe7Components }) {}
}

export class AddFailIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.AddFailIwe7Components;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpsertIwe7Components;

  constructor(public payload: { Iwe7Components: Iwe7Components }) {}
}

export class UpsertSuccessIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpsertSuccessIwe7Components;

  constructor(public payload: { Iwe7Components: Iwe7Components }) {}
}

export class UpsertFailIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpsertFailIwe7Components;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.AddIwe7Componentss;

  constructor(public payload: { Iwe7Componentss: Iwe7Components[] }) {}
}

export class AddSuccessIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.AddSuccessIwe7Componentss;

  constructor(public payload: { Iwe7Componentss: Iwe7Components[] }) {}
}

export class AddFailIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.AddFailIwe7Componentss;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpsertIwe7Componentss;

  constructor(public payload: { Iwe7Componentss: Iwe7Components[] }) {}
}

export class UpsertSuccessIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpsertSuccessIwe7Componentss;

  constructor(public payload: { Iwe7Componentss: Iwe7Components[] }) {}
}

export class UpsertFailIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpsertFailIwe7Componentss;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpdateIwe7Components;

  constructor(public payload: { Iwe7Components: Update<Iwe7Components> }) {}
}

export class UpdateSuccessIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpdateSuccessIwe7Components;

  constructor(public payload: { Iwe7Components: Update<Iwe7Components> }) {}
}

export class UpdateFailIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpdateFailIwe7Components;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpdateIwe7Componentss;

  constructor(public payload: { Iwe7Componentss: Update<Iwe7Components>[] }) {}
}

export class UpdateSuccessIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpdateSuccessIwe7Componentss;

  constructor(public payload: { Iwe7Componentss: Update<Iwe7Components>[] }) {}
}

export class UpdateFailIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.UpdateFailIwe7Componentss;

  constructor(public payload: { msg: any }) {}
}

export class SelectIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.SelectIwe7Components;

  constructor(public payload: { id: string }) {}
}

export class DeleteIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.DeleteIwe7Components;

  constructor(public payload: { id: string }) {}
}

export class DeleteSuccessIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.DeleteSuccessIwe7Components;

  constructor(public payload: { id: string }) {}
}

export class DeleteFailIwe7Components implements Action {
  readonly type = Iwe7ComponentsActionTypes.DeleteFailIwe7Components;

  constructor(public payload: { msg: any }) {}
}

export class DeleteIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.DeleteIwe7Componentss;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteSuccessIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.DeleteSuccessIwe7Componentss;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteFailIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.DeleteFailIwe7Componentss;

  constructor(public payload: { msg: any }) {}
}

export class ClearIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.ClearIwe7Componentss;
}

export class ClearSuccessIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.ClearSuccessIwe7Componentss;
}

export class ClearFailIwe7Componentss implements Action {
  readonly type = Iwe7ComponentsActionTypes.ClearFailIwe7Componentss;
  constructor(public payload: { msg: any }) {}
}

export type Iwe7ComponentsActions =
 LoadIwe7Componentss
 | LoadSuccessIwe7Componentss
 | LoadFailIwe7Componentss

 | AddIwe7Components
 | AddSuccessIwe7Components
 | AddFailIwe7Components

 | UpsertIwe7Components
 | UpsertSuccessIwe7Components
 | UpsertFailIwe7Components

 | AddIwe7Componentss
 | AddSuccessIwe7Componentss
 | AddFailIwe7Componentss

 | UpsertIwe7Componentss
 | UpsertSuccessIwe7Componentss
 | UpsertFailIwe7Componentss

 | UpdateIwe7Components
 | UpdateSuccessIwe7Components
 | UpdateFailIwe7Components

 | UpdateIwe7Componentss
 | UpdateSuccessIwe7Componentss
 | UpdateFailIwe7Componentss

 | DeleteIwe7Components
 | DeleteSuccessIwe7Components
 | DeleteFailIwe7Components

 | DeleteIwe7Componentss
 | DeleteSuccessIwe7Componentss
 | DeleteFailIwe7Componentss

 | ClearIwe7Componentss
 | ClearSuccessIwe7Componentss
 | ClearFailIwe7Componentss

 | SelectIwe7Components;
