import { StoreModule, ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import {
    StoreRouterConnectingModule,
    routerReducer,
    RouterReducerState,
    RouterStateSerializer,
} from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

export interface State extends RouterReducerState<RouterStateUrl> {
}

export const initialState: State = {
    state: {
        url: '/',
        params: {},
        queryParams: {}
    },
    navigationId: 0
};

export function reducer(
    state = initialState,
    action: any
): State {
    return routerReducer(state, action);
}
export const selectIwe7RouterState = createFeatureSelector<State>('Iwe7Router');
export const selectIwe7RouterParams = createSelector(
    selectIwe7RouterState,
    (state: State) => state && state.state.params
);

export const selectIwe7RouterQueryParams = createSelector(
    selectIwe7RouterState,
    (state: State) => state && state.state.queryParams
);

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const {
            url,
            root: { queryParams },
        } = routerState;
        const { params } = route;
        return { url, params, queryParams };
    }
}
