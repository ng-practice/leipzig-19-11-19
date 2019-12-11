import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';

// https://github.com/btroncone/ngrx-store-logger
export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export interface State {}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
