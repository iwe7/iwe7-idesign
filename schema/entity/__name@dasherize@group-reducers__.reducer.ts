import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { <%= classify(name) %> } from '<%= featurePath(group, flat, "models", dasherize(name)) %><%= dasherize(name) %>.model';
import { <%= classify(name) %>Actions, <%= classify(name) %>ActionTypes } from '<%= featurePath(group, flat, "actions", dasherize(name)) %><%= dasherize(name) %>.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<<%= classify(name) %>> {
  // additional entities state properties
  total: number;
  selectId: string;
}

export const adapter: EntityAdapter<<%= classify(name) %>> = createEntityAdapter<<%= classify(name) %>>({
  selectId: (modal: <%= classify(name) %>) => modal.id,
  sortComparer: (a: <%= classify(name) %>, b: <%= classify(name) %>) => a.id.localeCompare(b.id),
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  total: 0,
  selectId: null,
});

export function reducer(
  state = initialState,
  action: <%= classify(name) %>Actions
): State {
  switch (action.type) {
    case <%= classify(name) %>ActionTypes.AddSuccess<%= classify(name) %>: {
      return adapter.addOne(action.payload.<%= classify(name) %>, state);
    }

    case <%= classify(name) %>ActionTypes.UpsertSuccess<%= classify(name) %>: {
      return adapter.upsertOne(action.payload.<%= classify(name) %>, state);
    }

    case <%= classify(name) %>ActionTypes.AddSuccess<%= classify(name) %>s: {
      return adapter.addMany(action.payload.<%= classify(name) %>s, state);
    }

    case <%= classify(name) %>ActionTypes.UpsertSuccess<%= classify(name) %>s: {
      return adapter.upsertMany(action.payload.<%= classify(name) %>s, state);
    }

    case <%= classify(name) %>ActionTypes.UpdateSuccess<%= classify(name) %>: {
      return adapter.updateOne(action.payload.<%= classify(name) %>, state);
    }

    case <%= classify(name) %>ActionTypes.UpdateSuccess<%= classify(name) %>s: {
      return adapter.updateMany(action.payload.<%= classify(name) %>s, state);
    }

    case <%= classify(name) %>ActionTypes.DeleteSuccess<%= classify(name) %>: {
      return adapter.removeOne(action.payload.id, state);
    }

    case <%= classify(name) %>ActionTypes.Select<%= classify(name) %>: {
      return {...state, selectId: action.payload.id };
    }

    case <%= classify(name) %>ActionTypes.DeleteSuccess<%= classify(name) %>s: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case <%= classify(name) %>ActionTypes.LoadSuccess<%= classify(name) %>s: {
      state = {...state, total: action.payload.total };
      return adapter.addAll(action.payload.<%= classify(name) %>s, state);
    }

    case <%= classify(name) %>ActionTypes.ClearSuccess<%= classify(name) %>s: {
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

export const select<%= classify(name) %>State = createFeatureSelector<State>('<%= classify(name) %>');
export const select<%= classify(name) %>Ids = createSelector(
  select<%= classify(name) %>State,
  selectIds
);
export const select<%= classify(name) %>Entities = createSelector(
  select<%= classify(name) %>State,
  selectEntities
);
export const selectAll<%= classify(name) %> = createSelector(
  select<%= classify(name) %>State,
  selectAll
);
export function selectTotal(state: State) {
  return state.total;
}
export const select<%= classify(name) %>Total = createSelector(
  select<%= classify(name) %>State,
  selectTotal
);
export const get<%= classify(name) %>SelectedId = (state: State) => state.selectId;
export const selectCurrent<%= classify(name) %>Id = createSelector(select<%= classify(name) %>State, get<%= classify(name) %>SelectedId);

export const select<%= classify(name) %>Id = createSelector(
  select<%= classify(name) %>Entities,
  selectCurrent<%= classify(name) %>Id,
  (selectEntities, selectId) => selectEntities[selectId]
);
