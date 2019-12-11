import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodosService } from '../shared/todos-api.service';
import {
  createTodo,
  loadAllTodos,
  loadAllTodosComplete,
  loadAllTodosError
} from './todos.actions';

@Injectable()
export class TodosEffects {
  loadAll = createEffect(() =>
    this.actions.pipe(
      ofType(loadAllTodos),
      switchMap(() => this.todosService.query()),
      map(todos => loadAllTodosComplete({ payload: todos })),
      catchError(() => of(loadAllTodosError()))
    )
  );

  create = createEffect(() =>
    this.actions.pipe(
      ofType(createTodo),
      switchMap(({ payload }) => this.todosService.create(payload)),
      map(() => loadAllTodos())
    )
  );

  constructor(private actions: Actions, private todosService: TodosService) {}
}
