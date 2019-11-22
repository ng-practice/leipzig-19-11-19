import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodosService as TodosApi } from './shared/todos-api.service';

@Component({
  selector: 'ws-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private todoApi: TodosApi) {}

  ngOnInit(): void {
    this.todos = this.todoApi.query();
  }

  create(todoForCreation: Todo): void {
    this.todos = this.todoApi.create(todoForCreation);
  }

  delete(todoForDeletion: Todo): void {
    this.todos = this.todoApi.delete(todoForDeletion);
  }

  checkOrUncheck(todoForUpdate: Todo): void {
    this.todos = this.todoApi.checkOrUncheck(todoForUpdate);
  }
}
