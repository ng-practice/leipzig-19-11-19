import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodosService } from './shared/todos.service';

@Component({
  selector: 'ws-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit, OnDestroy {
  private readonly sink = new Subscription();

  todos: Observable<Todo[]>;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.query();
    // this.todosService.query().subscribe(todos => (this.todos = todos));
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  create(todoForCreation: Todo): void {
    this.todos = this.todosService.create(todoForCreation);
  }

  delete(todoForDeletion: Todo): void {
    this.todos = this.todosService.delete(todoForDeletion);
  }

  checkOrUncheck(todoForUpdate: Todo): void {
    this.todos = this.todosService.checkOrUncheck(todoForUpdate);
  }
}
