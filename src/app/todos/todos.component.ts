import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Todo } from './models/todo';
import { TodosService as TodosApi } from './shared/todos-api.service';

@Component({
  selector: 'ws-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit, OnDestroy {
  destroy = new Subject<void>();
  todos: Todo[] = [];

  constructor(private route: ActivatedRoute, private todoApi: TodosApi) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(paramMap => this.todoApi.query(paramMap.get('query'))),
        takeUntil(this.destroy)
      )
      .subscribe(todos => (this.todos = todos));
  }

  create(todoForCreation: Todo): void {
    this.todoApi
      .create(todoForCreation)
      .pipe(
        switchMap(() => this.route.paramMap),
        switchMap(paramMap => this.todoApi.query(paramMap.get('query'))),
        takeUntil(this.destroy)
      )
      .subscribe(todos => (this.todos = todos));
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
    console.log(`Edit ${todo.text}.`);
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
