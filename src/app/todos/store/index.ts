import { ActionReducerMap } from '@ngrx/store';
import { todosReducer, TodosSlice } from './todos.reducer';

export interface TodosStore {
  todos: TodosFeature;
}

export interface TodosFeature {
  list: TodosSlice;
}

export const reducers: ActionReducerMap<TodosFeature> = {
  list: todosReducer
};
