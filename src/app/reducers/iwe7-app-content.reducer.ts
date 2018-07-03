import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Iwe7AppContent } from '../models/iwe7-app-content.model';
import { Iwe7AppContentActions, Iwe7AppContentActionTypes } from '../actions/iwe7-app-content.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Iwe7AppContent> {
  // additional entities state properties
  total: number;
  selectId: string;
}

export const adapter: EntityAdapter<Iwe7AppContent> = createEntityAdapter<Iwe7AppContent>({
  selectId: (modal: Iwe7AppContent) => modal.id,
  sortComparer: (a: Iwe7AppContent, b: Iwe7AppContent) => a.id.localeCompare(b.id),
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  total: 0,
  selectId: null,
});

export function reducer(
  state = initialState,
  action: Iwe7AppContentActions
): State {
  switch (action.type) {
    case Iwe7AppContentActionTypes.AddSuccessIwe7AppContent: {
      return adapter.addOne(action.payload.Iwe7AppContent, state);
    }

    case Iwe7AppContentActionTypes.UpsertSuccessIwe7AppContent: {
      return adapter.upsertOne(action.payload.Iwe7AppContent, state);
    }

    case Iwe7AppContentActionTypes.AddSuccessIwe7AppContents: {
      return adapter.addMany(action.payload.Iwe7AppContents, state);
    }

    case Iwe7AppContentActionTypes.UpsertSuccessIwe7AppContents: {
      return adapter.upsertMany(action.payload.Iwe7AppContents, state);
    }

    case Iwe7AppContentActionTypes.UpdateSuccessIwe7AppContent: {
      return adapter.updateOne(action.payload.Iwe7AppContent, state);
    }

    case Iwe7AppContentActionTypes.UpdateSuccessIwe7AppContents: {
      return adapter.updateMany(action.payload.Iwe7AppContents, state);
    }

    case Iwe7AppContentActionTypes.DeleteSuccessIwe7AppContent: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Iwe7AppContentActionTypes.SelectIwe7AppContent: {
      return {...state, selectId: action.payload.id };
    }

    case Iwe7AppContentActionTypes.DeleteSuccessIwe7AppContents: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Iwe7AppContentActionTypes.LoadSuccessIwe7AppContents: {
      state = {...state, total: action.payload.total };
      return adapter.addAll(action.payload.Iwe7AppContents, state);
    }

    case Iwe7AppContentActionTypes.ClearSuccessIwe7AppContents: {
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

export const selectIwe7AppContentState = createFeatureSelector<State>('Iwe7AppContent');
export const selectIwe7AppContentIds = createSelector(
  selectIwe7AppContentState,
  selectIds
);
export const selectIwe7AppContentEntities = createSelector(
  selectIwe7AppContentState,
  selectEntities
);
export const selectAllIwe7AppContent = createSelector(
  selectIwe7AppContentState,
  selectAll
);
export function selectTotal(state: State) {
  return state.total;
}
export const selectIwe7AppContentTotal = createSelector(
  selectIwe7AppContentState,
  selectTotal
);
export const getIwe7AppContentSelectedId = (state: State) => state.selectId;
export const selectCurrentIwe7AppContentId = createSelector(selectIwe7AppContentState, getIwe7AppContentSelectedId);

export const selectIwe7AppContentId = createSelector(
  selectIwe7AppContentEntities,
  selectCurrentIwe7AppContentId,
  (selectEntities, selectId) => selectEntities[selectId]
);
