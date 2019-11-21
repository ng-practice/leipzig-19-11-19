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
    this.todos = this.todosService.getAllTodos();
  }

  addToList(newTodo: Todo) {
    this.todos = this.todosService.create(newTodo);
  }

  sortAsc() {
    this.todos.sort((current, next) => current.text.localeCompare(next.text));
  }
  sortDesc() {
    this.todos.sort((current, next) => next.text.localeCompare(current.text));
  }

  checkOrUncheckTodo(todoForUpdate: Todo) {
    this.todos = this.todosService.update(todoForUpdate);
  }
}
