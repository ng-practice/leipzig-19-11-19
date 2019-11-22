import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './models/todo';
import { TodosService } from './shared/todos.service';

@Component({
  selector: 'ws-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit, OnDestroy {
  private readonly sink = new Subscription();

  todos: Todo[];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.query().subscribe(todos => (this.todos = todos));
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  create(todoForCreation: Todo): void {
    this.sink.add(
      this.todosService
        .create(todoForCreation)
        .subscribe(todos => (this.todos = todos))
    );
  }

  delete(todoForDeletion: Todo): void {
    this.sink.add(
      this.todosService
        .delete(todoForDeletion)
        .subscribe(todos => (this.todos = todos))
    );
  }

  checkOrUncheckTodo(todoForUpdate: Todo): void {
    this.sink.add(
      this.todosService
        .checkOrUncheck(todoForUpdate)
        .subscribe(todos => (this.todos = todos))
    );
  }
}
