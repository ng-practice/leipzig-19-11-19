import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const createTodo = createAction(
  '[Todo] Create Todo',
  props<{ payload: Todo }>()
);
