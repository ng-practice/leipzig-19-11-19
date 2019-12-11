import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo';
import { createTodo } from './todos.actions';

export interface TodosSlice {
  all: Todo[];
}

const initialSlice: TodosSlice = {
  all: []
};

export const todosReducer = createReducer(
  initialSlice,
  on(createTodo, (slice, action) => {
    // Copy existing slice into new object
    const next = { ...slice };
    // Add new todo to list
    next.all = [...slice.all, action.payload];
    // Return new slice
    return next;
  })
  // Compact version
  // on(createTodo, (slice, { payload }) => ({
  //   ...slice,
  //   all: [...slice.all, payload]
  // }))
);
