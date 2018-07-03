import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7AppContent } from '../models/iwe7-app-content.model';

export enum Iwe7AppContentActionTypes {
  LoadIwe7AppContents = '[Iwe7AppContent] Load Iwe7AppContents',
  LoadSuccessIwe7AppContents = '[Iwe7AppContent] Load Success Iwe7AppContents',
  LoadFailIwe7AppContents = '[Iwe7AppContent] Load Fail Iwe7AppContents',
  AddIwe7AppContent = '[Iwe7AppContent] Add Iwe7AppContent',
  AddSuccessIwe7AppContent = '[Iwe7AppContent] Add Success Iwe7AppContent',
  AddFailIwe7AppContent = '[Iwe7AppContent] Add Fail Iwe7AppContent',
  UpsertIwe7AppContent = '[Iwe7AppContent] Upsert Iwe7AppContent',
  UpsertSuccessIwe7AppContent = '[Iwe7AppContent] Upsert Success Iwe7AppContent',
  UpsertFailIwe7AppContent = '[Iwe7AppContent] Upsert Fail Iwe7AppContent',
  AddIwe7AppContents = '[Iwe7AppContent] Add Iwe7AppContents',
  AddSuccessIwe7AppContents = '[Iwe7AppContent] Add Success Iwe7AppContents',
  AddFailIwe7AppContents = '[Iwe7AppContent] Add Fail Iwe7AppContents',
  UpsertIwe7AppContents = '[Iwe7AppContent] Upsert Iwe7AppContents',
  UpsertSuccessIwe7AppContents = '[Iwe7AppContent] Upsert Success Iwe7AppContents',
  UpsertFailIwe7AppContents = '[Iwe7AppContent] Upsert Fail Iwe7AppContents',
  UpdateIwe7AppContent = '[Iwe7AppContent] Update Iwe7AppContent',
  UpdateSuccessIwe7AppContent = '[Iwe7AppContent] Update Success Iwe7AppContent',
  UpdateFailIwe7AppContent = '[Iwe7AppContent] Update Fail Iwe7AppContent',
  UpdateIwe7AppContents = '[Iwe7AppContent] Update Iwe7AppContents',
  UpdateSuccessIwe7AppContents = '[Iwe7AppContent] Update Success Iwe7AppContents',
  UpdateFailIwe7AppContents = '[Iwe7AppContent] Update Fail Iwe7AppContents',
  DeleteIwe7AppContent = '[Iwe7AppContent] Delete Iwe7AppContent',
  DeleteSuccessIwe7AppContent = '[Iwe7AppContent] Delete Success Iwe7AppContent',
  DeleteFailIwe7AppContent = '[Iwe7AppContent] Delete Fail Iwe7AppContent',
  DeleteIwe7AppContents = '[Iwe7AppContent] Delete Iwe7AppContents',
  DeleteSuccessIwe7AppContents = '[Iwe7AppContent] Delete Success Iwe7AppContents',
  DeleteFailIwe7AppContents = '[Iwe7AppContent] Delete Fail Iwe7AppContents',
  ClearIwe7AppContents = '[Iwe7AppContent] Clear Iwe7AppContents',
  ClearSuccessIwe7AppContents = '[Iwe7AppContent] Clear Success Iwe7AppContents',
  ClearFailIwe7AppContents = '[Iwe7AppContent] Clear Fail Iwe7AppContents',
  SelectIwe7AppContent = '[Iwe7AppContent] Select Iwe7AppContents',
}

export class LoadIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.LoadIwe7AppContents;

  constructor(public payload: { [key: string]: any }) {}
}

export class LoadSuccessIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.LoadSuccessIwe7AppContents;
  constructor(public payload: { Iwe7AppContents: Iwe7AppContent[], total: number }) {}
}

export class LoadFailIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.LoadFailIwe7AppContents;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.AddIwe7AppContent;

  constructor(public payload: { Iwe7AppContent: Iwe7AppContent }) {}
}

export class AddSuccessIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.AddSuccessIwe7AppContent;

  constructor(public payload: { Iwe7AppContent: Iwe7AppContent }) {}
}

export class AddFailIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.AddFailIwe7AppContent;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.UpsertIwe7AppContent;

  constructor(public payload: { Iwe7AppContent: Iwe7AppContent }) {}
}

export class UpsertSuccessIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.UpsertSuccessIwe7AppContent;

  constructor(public payload: { Iwe7AppContent: Iwe7AppContent }) {}
}

export class UpsertFailIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.UpsertFailIwe7AppContent;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.AddIwe7AppContents;

  constructor(public payload: { Iwe7AppContents: Iwe7AppContent[] }) {}
}

export class AddSuccessIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.AddSuccessIwe7AppContents;

  constructor(public payload: { Iwe7AppContents: Iwe7AppContent[] }) {}
}

export class AddFailIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.AddFailIwe7AppContents;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.UpsertIwe7AppContents;

  constructor(public payload: { Iwe7AppContents: Iwe7AppContent[] }) {}
}

export class UpsertSuccessIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.UpsertSuccessIwe7AppContents;

  constructor(public payload: { Iwe7AppContents: Iwe7AppContent[] }) {}
}

export class UpsertFailIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.UpsertFailIwe7AppContents;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.UpdateIwe7AppContent;

  constructor(public payload: { Iwe7AppContent: Update<Iwe7AppContent> }) {}
}

export class UpdateSuccessIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.UpdateSuccessIwe7AppContent;

  constructor(public payload: { Iwe7AppContent: Update<Iwe7AppContent> }) {}
}

export class UpdateFailIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.UpdateFailIwe7AppContent;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.UpdateIwe7AppContents;

  constructor(public payload: { Iwe7AppContents: Update<Iwe7AppContent>[] }) {}
}

export class UpdateSuccessIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.UpdateSuccessIwe7AppContents;

  constructor(public payload: { Iwe7AppContents: Update<Iwe7AppContent>[] }) {}
}

export class UpdateFailIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.UpdateFailIwe7AppContents;

  constructor(public payload: { msg: any }) {}
}

export class SelectIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.SelectIwe7AppContent;

  constructor(public payload: { id: string }) {}
}

export class DeleteIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.DeleteIwe7AppContent;

  constructor(public payload: { id: string }) {}
}

export class DeleteSuccessIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.DeleteSuccessIwe7AppContent;

  constructor(public payload: { id: string }) {}
}

export class DeleteFailIwe7AppContent implements Action {
  readonly type = Iwe7AppContentActionTypes.DeleteFailIwe7AppContent;

  constructor(public payload: { msg: any }) {}
}

export class DeleteIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.DeleteIwe7AppContents;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteSuccessIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.DeleteSuccessIwe7AppContents;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteFailIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.DeleteFailIwe7AppContents;

  constructor(public payload: { msg: any }) {}
}

export class ClearIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.ClearIwe7AppContents;
}

export class ClearSuccessIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.ClearSuccessIwe7AppContents;
}

export class ClearFailIwe7AppContents implements Action {
  readonly type = Iwe7AppContentActionTypes.ClearFailIwe7AppContents;
  constructor(public payload: { msg: any }) {}
}

export type Iwe7AppContentActions =
 LoadIwe7AppContents
 | LoadSuccessIwe7AppContents
 | LoadFailIwe7AppContents

 | AddIwe7AppContent
 | AddSuccessIwe7AppContent
 | AddFailIwe7AppContent

 | UpsertIwe7AppContent
 | UpsertSuccessIwe7AppContent
 | UpsertFailIwe7AppContent

 | AddIwe7AppContents
 | AddSuccessIwe7AppContents
 | AddFailIwe7AppContents

 | UpsertIwe7AppContents
 | UpsertSuccessIwe7AppContents
 | UpsertFailIwe7AppContents

 | UpdateIwe7AppContent
 | UpdateSuccessIwe7AppContent
 | UpdateFailIwe7AppContent

 | UpdateIwe7AppContents
 | UpdateSuccessIwe7AppContents
 | UpdateFailIwe7AppContents

 | DeleteIwe7AppContent
 | DeleteSuccessIwe7AppContent
 | DeleteFailIwe7AppContent

 | DeleteIwe7AppContents
 | DeleteSuccessIwe7AppContents
 | DeleteFailIwe7AppContents

 | ClearIwe7AppContents
 | ClearSuccessIwe7AppContents
 | ClearFailIwe7AppContents

 | SelectIwe7AppContent;
