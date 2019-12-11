import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo';
import { createTodo, loadAllTodosComplete } from './todos.actions';

export interface TodosSlice {
  all: Todo[];
}

const initialSlice: TodosSlice = {
  all: []
};

export const todosReducer = createReducer(
  initialSlice,
  // dispatched from todos.component
  on(createTodo, (slice, action) => {
    // Copy existing slice into new object
    const next = { ...slice };
    // Add new todo to list
    next.all = [...slice.all, action.payload];
    // Return new slice
    return next;
  }),
  // dispatched from todos.effect
  on(loadAllTodosComplete, (slice, { payload }) => ({
    ...slice,
    all: payload
  }))
  // Compact version
  // on(createTodo, (slice, { payload }) => ({
  //   ...slice,
  //   all: [...slice.all, payload]
  // }))
);
