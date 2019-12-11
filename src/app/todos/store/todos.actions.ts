import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const loadAllTodos = createAction('[Todo/Api] Load all todos');
export const loadAllTodosError = createAction(
  '[Todo/API] Load all todos error'
);

export const loadAllTodosComplete = createAction(
  '[Todo/Api] Load all todos completed',
  props<{ payload: Todo[] }>()
);

export const createTodo = createAction(
  '[Todo] Create Todo',
  props<{ payload: Todo }>()
);

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ payload: Todo }>()
);

export const toggleCompleteTodo = createAction(
  '[Todo] Toggle complete Todo',
  props<{ payload: Todo }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ payload: Todo }>()
);
