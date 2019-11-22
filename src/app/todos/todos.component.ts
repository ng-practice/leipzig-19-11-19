import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo';
import { TodosService } from './shared/todos.service';

@Component({
  selector: 'ws-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.query().subscribe(todos => (this.todos = todos));
  }

  create(todoForCreation: Todo) {
    this.todosService.create(todoForCreation).subscribe();
  }

  delete(todoForDeletion: Todo) {
    this.todosService.delete(todoForDeletion).subscribe();
  }

  checkOrUncheckTodo(todoForUpdate: Todo) {
    this.todosService.checkOrUncheck(todoForUpdate).subscribe();
  }
}
