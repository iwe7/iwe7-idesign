import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Iwe7AppPage } from '../models/iwe7-app-page.model';
import { Iwe7AppPageActions, Iwe7AppPageActionTypes } from '../actions/iwe7-app-page.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Iwe7AppPage> {
  // additional entities state properties
  total: number;
  selectId: string;
}

export const adapter: EntityAdapter<Iwe7AppPage> = createEntityAdapter<Iwe7AppPage>({
  selectId: (modal: Iwe7AppPage) => modal.id,
  sortComparer: (a: Iwe7AppPage, b: Iwe7AppPage) => a.id.localeCompare(b.id),
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  total: 0,
  selectId: null,
});

export function reducer(
  state = initialState,
  action: Iwe7AppPageActions
): State {
  switch (action.type) {
    case Iwe7AppPageActionTypes.AddSuccessIwe7AppPage: {
      return adapter.addOne(action.payload.Iwe7AppPage, state);
    }

    case Iwe7AppPageActionTypes.UpsertSuccessIwe7AppPage: {
      return adapter.upsertOne(action.payload.Iwe7AppPage, state);
    }

    case Iwe7AppPageActionTypes.AddSuccessIwe7AppPages: {
      return adapter.addMany(action.payload.Iwe7AppPages, state);
    }

    case Iwe7AppPageActionTypes.UpsertSuccessIwe7AppPages: {
      return adapter.upsertMany(action.payload.Iwe7AppPages, state);
    }

    case Iwe7AppPageActionTypes.UpdateSuccessIwe7AppPage: {
      return adapter.updateOne(action.payload.Iwe7AppPage, state);
    }

    case Iwe7AppPageActionTypes.UpdateSuccessIwe7AppPages: {
      return adapter.updateMany(action.payload.Iwe7AppPages, state);
    }

    case Iwe7AppPageActionTypes.DeleteSuccessIwe7AppPage: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Iwe7AppPageActionTypes.SelectIwe7AppPage: {
      return {...state, selectId: action.payload.id };
    }

    case Iwe7AppPageActionTypes.DeleteSuccessIwe7AppPages: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Iwe7AppPageActionTypes.LoadSuccessIwe7AppPages: {
      state = {...state, total: action.payload.total };
      return adapter.addAll(action.payload.Iwe7AppPages, state);
    }

    case Iwe7AppPageActionTypes.ClearSuccessIwe7AppPages: {
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

export const selectIwe7AppPageState = createFeatureSelector<State>('Iwe7AppPage');
export const selectIwe7AppPageIds = createSelector(
  selectIwe7AppPageState,
  selectIds
);
export const selectIwe7AppPageEntities = createSelector(
  selectIwe7AppPageState,
  selectEntities
);
export const selectAllIwe7AppPage = createSelector(
  selectIwe7AppPageState,
  selectAll
);
export function selectTotal(state: State) {
  return state.total;
}
export const selectIwe7AppPageTotal = createSelector(
  selectIwe7AppPageState,
  selectTotal
);
export const getIwe7AppPageSelectedId = (state: State) => state.selectId;
export const selectCurrentIwe7AppPageId = createSelector(selectIwe7AppPageState, getIwe7AppPageSelectedId);

export const selectIwe7AppPageId = createSelector(
  selectIwe7AppPageEntities,
  selectCurrentIwe7AppPageId,
  (selectEntities, selectId) => selectEntities[selectId]
);
