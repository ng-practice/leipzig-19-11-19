import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodosService as TodosApi } from './shared/todos-api.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ws-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private route: ActivatedRoute, private todoApi: TodosApi) {}

  ngOnInit(): void {
    this.todos = this.route.paramMap.pipe(
      switchMap(paramMap => this.todoApi.query(paramMap.get('query')))
    );
  }

  create(todoForCreation: Todo): void {
    this.todos = this.todoApi.create(todoForCreation).pipe(
      switchMap(() => this.route.paramMap),
      switchMap(paramMap => this.todoApi.query(paramMap.get('query')))
    );
  }

  delete(todoForDeletion: Todo): void {
    this.todos = this.todoApi.delete(todoForDeletion);
  }

  checkOrUncheck(todoForUpdate: Todo): void {
    this.todos = this.todoApi.checkOrUncheck(todoForUpdate);
  }
}
