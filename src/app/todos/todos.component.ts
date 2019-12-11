import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Todo } from './models/todo';
import { TodosService as TodosApi } from './shared/todos-api.service';
import { TodosStore } from './store';
import { createTodo, loadAllTodos } from './store/todos.actions';

@Component({
  selector: 'ws-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit, OnDestroy {
  destroy = new Subject<void>();
  todos: Todo[] = [];

  constructor(
    private store: Store<TodosStore>,
    private router: Router,
    private route: ActivatedRoute,
    private todoApi: TodosApi
  ) {}

  ngOnInit(): void {
    // initiate todos.effects loading todos.
    this.store.dispatch(loadAllTodos());

    this.store
      .pipe(select(state => state.todos.list.all))
      .subscribe(todos => (this.todos = todos));

    // this.route.paramMap
    //   .pipe(
    //     switchMap(paramMap => this.todoApi.query(paramMap.get('query'))),
    //     takeUntil(this.destroy)
    //   )
    //   .subscribe(todos => (this.todos = todos));
  }

  create(todoForCreation: Todo): void {
    this.store.dispatch(createTodo({ payload: todoForCreation }));

    // this.todoApi
    //   .create(todoForCreation)
    //   .pipe(
    //     switchMap(() => this.route.paramMap),
    //     switchMap(paramMap => this.todoApi.query(paramMap.get('query'))),
    //     takeUntil(this.destroy)
    //   )
    //   .subscribe(todos => (this.todos = todos));
  }

  delete(todoForDeletion: Todo): void {
    this.todoApi
      .delete(todoForDeletion)
      .pipe(
        switchMap(() => this.route.paramMap),
        switchMap(paramMap => this.todoApi.query(paramMap.get('query'))),
        takeUntil(this.destroy)
      )
      .subscribe(todos => (this.todos = todos));
  }

  checkOrUncheck(todoForUpdate: Todo): void {
    this.todoApi
      .checkOrUncheck(todoForUpdate)
      .pipe(
        switchMap(() => this.route.paramMap),
        switchMap(paramMap => this.todoApi.query(paramMap.get('query'))),
        takeUntil(this.destroy)
      )
      .subscribe(todos => (this.todos = todos));
  }

  navigateToEditPage(todo: Todo) {
    this.router.navigate(['..', 'todo', 'edit', todo.id]);
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
