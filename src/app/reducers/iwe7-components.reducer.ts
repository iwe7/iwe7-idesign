import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Iwe7Components } from '../models/iwe7-components.model';
import { Iwe7ComponentsActions, Iwe7ComponentsActionTypes } from '../actions/iwe7-components.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<Iwe7Components> {
  // additional entities state properties
  total: number;
  selectId: string;
}

export const adapter: EntityAdapter<Iwe7Components> = createEntityAdapter<Iwe7Components>({
  selectId: (modal: Iwe7Components) => modal.id,
  sortComparer: (a: Iwe7Components, b: Iwe7Components) => a.id.localeCompare(b.id),
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  total: 0,
  selectId: null,
});

export function reducer(
  state = initialState,
  action: Iwe7ComponentsActions
): State {
  switch (action.type) {
    case Iwe7ComponentsActionTypes.AddSuccessIwe7Components: {
      return adapter.addOne(action.payload.Iwe7Components, state);
    }

    case Iwe7ComponentsActionTypes.UpsertSuccessIwe7Components: {
      return adapter.upsertOne(action.payload.Iwe7Components, state);
    }

    case Iwe7ComponentsActionTypes.AddSuccessIwe7Componentss: {
      return adapter.addMany(action.payload.Iwe7Componentss, state);
    }

    case Iwe7ComponentsActionTypes.UpsertSuccessIwe7Componentss: {
      return adapter.upsertMany(action.payload.Iwe7Componentss, state);
    }

    case Iwe7ComponentsActionTypes.UpdateSuccessIwe7Components: {
      return adapter.updateOne(action.payload.Iwe7Components, state);
    }

    case Iwe7ComponentsActionTypes.UpdateSuccessIwe7Componentss: {
      return adapter.updateMany(action.payload.Iwe7Componentss, state);
    }

    case Iwe7ComponentsActionTypes.DeleteSuccessIwe7Components: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Iwe7ComponentsActionTypes.SelectIwe7Components: {
      return {...state, selectId: action.payload.id };
    }

    case Iwe7ComponentsActionTypes.DeleteSuccessIwe7Componentss: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Iwe7ComponentsActionTypes.LoadSuccessIwe7Componentss: {
      state = {...state, total: action.payload.total };
      return adapter.addAll(action.payload.Iwe7Componentss, state);
    }

    case Iwe7ComponentsActionTypes.ClearSuccessIwe7Componentss: {
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

export const selectIwe7ComponentsState = createFeatureSelector<State>('Iwe7Components');
export const selectIwe7ComponentsIds = createSelector(
  selectIwe7ComponentsState,
  selectIds
);
export const selectIwe7ComponentsEntities = createSelector(
  selectIwe7ComponentsState,
  selectEntities
);
export const selectAllIwe7Components = createSelector(
  selectIwe7ComponentsState,
  selectAll
);
export function selectTotal(state: State) {
  return state.total;
}
export const selectIwe7ComponentsTotal = createSelector(
  selectIwe7ComponentsState,
  selectTotal
);
export const getIwe7ComponentsSelectedId = (state: State) => state.selectId;
export const selectCurrentIwe7ComponentsId = createSelector(selectIwe7ComponentsState, getIwe7ComponentsSelectedId);

export const selectIwe7ComponentsId = createSelector(
  selectIwe7ComponentsEntities,
  selectCurrentIwe7ComponentsId,
  (selectEntities, selectId) => selectEntities[selectId]
);
