import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from './models/todo';
import { TodosService } from './shared/todos.service';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ws-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit, OnDestroy {
  private sink = new Subscription();

  todos: Todo[];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.query().subscribe(todos => (this.todos = todos));
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  create(todoForCreation: Todo) {
    this.sink.add(
      this.todosService
        .create(todoForCreation)
        .subscribe(todos => (this.todos = todos))
    );
  }

  delete(todoForDeletion: Todo) {
    this.sink.add(
      this.todosService
        .delete(todoForDeletion)
        .subscribe(todos => (this.todos = todos))
    );
  }

  checkOrUncheckTodo(todoForUpdate: Todo) {
    this.sink.add(
      this.todosService
        .checkOrUncheck(todoForUpdate)
        .subscribe(todos => (this.todos = todos))
    );
  }
}
