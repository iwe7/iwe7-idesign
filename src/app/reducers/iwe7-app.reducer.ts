import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Iwe7App } from '../models/iwe7-app.model';
import { Iwe7AppActions, Iwe7AppActionTypes } from '../actions/iwe7-app.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Iwe7App> {
  // additional entities state properties
  total: number;
  selectId: string;
  loaded: boolean;
}

export const adapter: EntityAdapter<Iwe7App> = createEntityAdapter<Iwe7App>({
  selectId: (modal: Iwe7App) => modal.id,
  sortComparer: (a: Iwe7App, b: Iwe7App) => a.id.localeCompare(b.id),
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  total: 0,
  selectId: null,
  loaded: false
});

export function reducer(
  state = initialState,
  action: Iwe7AppActions
): State {
  switch (action.type) {
    case Iwe7AppActionTypes.AddSuccessIwe7App: {
      return adapter.addOne(action.payload.Iwe7App, state);
    }

    case Iwe7AppActionTypes.UpsertSuccessIwe7App: {
      return adapter.upsertOne(action.payload.Iwe7App, state);
    }

    case Iwe7AppActionTypes.AddSuccessIwe7Apps: {
      return adapter.addMany(action.payload.Iwe7Apps, state);
    }

    case Iwe7AppActionTypes.UpsertSuccessIwe7Apps: {
      return adapter.upsertMany(action.payload.Iwe7Apps, state);
    }

    case Iwe7AppActionTypes.UpdateSuccessIwe7App: {
      return adapter.updateOne(action.payload.Iwe7App, state);
    }

    case Iwe7AppActionTypes.UpdateSuccessIwe7Apps: {
      return adapter.updateMany(action.payload.Iwe7Apps, state);
    }

    case Iwe7AppActionTypes.DeleteSuccessIwe7App: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Iwe7AppActionTypes.SelectSuccessIwe7App: {
      return { ...state, selectId: action.payload.id };
    }

    case Iwe7AppActionTypes.DeleteSuccessIwe7Apps: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Iwe7AppActionTypes.LoadSuccessIwe7Apps: {
      state = { ...state, total: action.payload.total, loaded: true };
      return adapter.addAll(action.payload.Iwe7Apps, state);
    }

    case Iwe7AppActionTypes.ClearSuccessIwe7Apps: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
} = adapter.getSelectors();

export const selectIwe7AppState = createFeatureSelector<State>('Iwe7App');
export const selectIwe7AppIds = createSelector(
  selectIwe7AppState,
  selectIds
);
export const selectIwe7AppEntities = createSelector(
  selectIwe7AppState,
  selectEntities
);
export const selectAllIwe7App = createSelector(
  selectIwe7AppState,
  selectAll
);
export function selectTotal(state: State) {
  return state.total;
}
export const selectIwe7AppTotal = createSelector(
  selectIwe7AppState,
  selectTotal
);
export const getIwe7AppSelectedId = (state: State) => state.selectId;
export const selectCurrentIwe7AppId = createSelector(selectIwe7AppState, getIwe7AppSelectedId);

export const selectIwe7AppId = createSelector(
  selectIwe7AppEntities,
  selectCurrentIwe7AppId,
  (selectEntities, selectId) => selectEntities[selectId]
);
export const selectIwe7AppLoaded = createSelector(
  selectIwe7AppState,
  (state: State) => state.loaded
);
