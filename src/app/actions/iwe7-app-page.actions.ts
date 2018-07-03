import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Iwe7AppPage } from '../models/iwe7-app-page.model';

export enum Iwe7AppPageActionTypes {
  LoadIwe7AppPages = '[Iwe7AppPage] Load Iwe7AppPages',
  LoadSuccessIwe7AppPages = '[Iwe7AppPage] Load Success Iwe7AppPages',
  LoadFailIwe7AppPages = '[Iwe7AppPage] Load Fail Iwe7AppPages',
  AddIwe7AppPage = '[Iwe7AppPage] Add Iwe7AppPage',
  AddSuccessIwe7AppPage = '[Iwe7AppPage] Add Success Iwe7AppPage',
  AddFailIwe7AppPage = '[Iwe7AppPage] Add Fail Iwe7AppPage',
  UpsertIwe7AppPage = '[Iwe7AppPage] Upsert Iwe7AppPage',
  UpsertSuccessIwe7AppPage = '[Iwe7AppPage] Upsert Success Iwe7AppPage',
  UpsertFailIwe7AppPage = '[Iwe7AppPage] Upsert Fail Iwe7AppPage',
  AddIwe7AppPages = '[Iwe7AppPage] Add Iwe7AppPages',
  AddSuccessIwe7AppPages = '[Iwe7AppPage] Add Success Iwe7AppPages',
  AddFailIwe7AppPages = '[Iwe7AppPage] Add Fail Iwe7AppPages',
  UpsertIwe7AppPages = '[Iwe7AppPage] Upsert Iwe7AppPages',
  UpsertSuccessIwe7AppPages = '[Iwe7AppPage] Upsert Success Iwe7AppPages',
  UpsertFailIwe7AppPages = '[Iwe7AppPage] Upsert Fail Iwe7AppPages',
  UpdateIwe7AppPage = '[Iwe7AppPage] Update Iwe7AppPage',
  UpdateSuccessIwe7AppPage = '[Iwe7AppPage] Update Success Iwe7AppPage',
  UpdateFailIwe7AppPage = '[Iwe7AppPage] Update Fail Iwe7AppPage',
  UpdateIwe7AppPages = '[Iwe7AppPage] Update Iwe7AppPages',
  UpdateSuccessIwe7AppPages = '[Iwe7AppPage] Update Success Iwe7AppPages',
  UpdateFailIwe7AppPages = '[Iwe7AppPage] Update Fail Iwe7AppPages',
  DeleteIwe7AppPage = '[Iwe7AppPage] Delete Iwe7AppPage',
  DeleteSuccessIwe7AppPage = '[Iwe7AppPage] Delete Success Iwe7AppPage',
  DeleteFailIwe7AppPage = '[Iwe7AppPage] Delete Fail Iwe7AppPage',
  DeleteIwe7AppPages = '[Iwe7AppPage] Delete Iwe7AppPages',
  DeleteSuccessIwe7AppPages = '[Iwe7AppPage] Delete Success Iwe7AppPages',
  DeleteFailIwe7AppPages = '[Iwe7AppPage] Delete Fail Iwe7AppPages',
  ClearIwe7AppPages = '[Iwe7AppPage] Clear Iwe7AppPages',
  ClearSuccessIwe7AppPages = '[Iwe7AppPage] Clear Success Iwe7AppPages',
  ClearFailIwe7AppPages = '[Iwe7AppPage] Clear Fail Iwe7AppPages',
  SelectIwe7AppPage = '[Iwe7AppPage] Select Iwe7AppPages',
}

export class LoadIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.LoadIwe7AppPages;

  constructor(public payload: { [key: string]: any }) {}
}

export class LoadSuccessIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.LoadSuccessIwe7AppPages;
  constructor(public payload: { Iwe7AppPages: Iwe7AppPage[], total: number }) {}
}

export class LoadFailIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.LoadFailIwe7AppPages;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.AddIwe7AppPage;

  constructor(public payload: { Iwe7AppPage: Iwe7AppPage }) {}
}

export class AddSuccessIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.AddSuccessIwe7AppPage;

  constructor(public payload: { Iwe7AppPage: Iwe7AppPage }) {}
}

export class AddFailIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.AddFailIwe7AppPage;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.UpsertIwe7AppPage;

  constructor(public payload: { Iwe7AppPage: Iwe7AppPage }) {}
}

export class UpsertSuccessIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.UpsertSuccessIwe7AppPage;

  constructor(public payload: { Iwe7AppPage: Iwe7AppPage }) {}
}

export class UpsertFailIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.UpsertFailIwe7AppPage;

  constructor(public payload: { msg: any }) {}
}

export class AddIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.AddIwe7AppPages;

  constructor(public payload: { Iwe7AppPages: Iwe7AppPage[] }) {}
}

export class AddSuccessIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.AddSuccessIwe7AppPages;

  constructor(public payload: { Iwe7AppPages: Iwe7AppPage[] }) {}
}

export class AddFailIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.AddFailIwe7AppPages;

  constructor(public payload: { msg: any }) {}
}

export class UpsertIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.UpsertIwe7AppPages;

  constructor(public payload: { Iwe7AppPages: Iwe7AppPage[] }) {}
}

export class UpsertSuccessIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.UpsertSuccessIwe7AppPages;

  constructor(public payload: { Iwe7AppPages: Iwe7AppPage[] }) {}
}

export class UpsertFailIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.UpsertFailIwe7AppPages;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.UpdateIwe7AppPage;

  constructor(public payload: { Iwe7AppPage: Update<Iwe7AppPage> }) {}
}

export class UpdateSuccessIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.UpdateSuccessIwe7AppPage;

  constructor(public payload: { Iwe7AppPage: Update<Iwe7AppPage> }) {}
}

export class UpdateFailIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.UpdateFailIwe7AppPage;

  constructor(public payload: { msg: any }) {}
}

export class UpdateIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.UpdateIwe7AppPages;

  constructor(public payload: { Iwe7AppPages: Update<Iwe7AppPage>[] }) {}
}

export class UpdateSuccessIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.UpdateSuccessIwe7AppPages;

  constructor(public payload: { Iwe7AppPages: Update<Iwe7AppPage>[] }) {}
}

export class UpdateFailIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.UpdateFailIwe7AppPages;

  constructor(public payload: { msg: any }) {}
}

export class SelectIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.SelectIwe7AppPage;

  constructor(public payload: { id: string }) {}
}

export class DeleteIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.DeleteIwe7AppPage;

  constructor(public payload: { id: string }) {}
}

export class DeleteSuccessIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.DeleteSuccessIwe7AppPage;

  constructor(public payload: { id: string }) {}
}

export class DeleteFailIwe7AppPage implements Action {
  readonly type = Iwe7AppPageActionTypes.DeleteFailIwe7AppPage;

  constructor(public payload: { msg: any }) {}
}

export class DeleteIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.DeleteIwe7AppPages;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteSuccessIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.DeleteSuccessIwe7AppPages;

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteFailIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.DeleteFailIwe7AppPages;

  constructor(public payload: { msg: any }) {}
}

export class ClearIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.ClearIwe7AppPages;
}

export class ClearSuccessIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.ClearSuccessIwe7AppPages;
}

export class ClearFailIwe7AppPages implements Action {
  readonly type = Iwe7AppPageActionTypes.ClearFailIwe7AppPages;
  constructor(public payload: { msg: any }) {}
}

export type Iwe7AppPageActions =
 LoadIwe7AppPages
 | LoadSuccessIwe7AppPages
 | LoadFailIwe7AppPages

 | AddIwe7AppPage
 | AddSuccessIwe7AppPage
 | AddFailIwe7AppPage

 | UpsertIwe7AppPage
 | UpsertSuccessIwe7AppPage
 | UpsertFailIwe7AppPage

 | AddIwe7AppPages
 | AddSuccessIwe7AppPages
 | AddFailIwe7AppPages

 | UpsertIwe7AppPages
 | UpsertSuccessIwe7AppPages
 | UpsertFailIwe7AppPages

 | UpdateIwe7AppPage
 | UpdateSuccessIwe7AppPage
 | UpdateFailIwe7AppPage

 | UpdateIwe7AppPages
 | UpdateSuccessIwe7AppPages
 | UpdateFailIwe7AppPages

 | DeleteIwe7AppPage
 | DeleteSuccessIwe7AppPage
 | DeleteFailIwe7AppPage

 | DeleteIwe7AppPages
 | DeleteSuccessIwe7AppPages
 | DeleteFailIwe7AppPages

 | ClearIwe7AppPages
 | ClearSuccessIwe7AppPages
 | ClearFailIwe7AppPages

 | SelectIwe7AppPage;
