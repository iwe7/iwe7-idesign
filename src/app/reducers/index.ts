import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as Iwe7App from './iwe7-app.reducer';
import * as Iwe7AppPage from './iwe7-app-page.reducer';
import * as Iwe7Router from './iwe7-router.reducer';
import * as Iwe7Components from './iwe7-components.reducer';
import * as Iwe7AppContent from './iwe7-app-content.reducer';

export interface State {
  Iwe7App: Iwe7App.State;
  Iwe7AppPage: Iwe7AppPage.State;
  Iwe7Router: Iwe7Router.State;
  Iwe7Components: Iwe7Components.State;
  Iwe7AppContent: Iwe7AppContent.State;
}

export const reducers: ActionReducerMap<State> = {
  Iwe7App: Iwe7App.reducer,
  Iwe7AppPage: Iwe7AppPage.reducer,
  Iwe7Router: Iwe7Router.reducer,
  Iwe7Components: Iwe7Components.reducer,
  Iwe7AppContent: Iwe7AppContent.reducer
};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
