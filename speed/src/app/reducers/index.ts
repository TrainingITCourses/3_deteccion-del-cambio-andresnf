import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCondition from './condition.reducer';

export interface State {

  condition: fromCondition.State;
}

export const reducers: ActionReducerMap<State> = {

  condition: fromCondition.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
