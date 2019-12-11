import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodosStore } from './store';
import {
  createTodo,
  deleteTodo,
  loadAllTodos,
  toggleCompleteTodo
} from './store/todos.actions';

@Component({
  selector: 'ws-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private store: Store<TodosStore>, private router: Router) {}

  ngOnInit(): void {
    // initiate todos.effects loading todos.
    this.store.dispatch(loadAllTodos());
    this.todos = this.store.pipe(select(state => state.todos.list.all));
  }

  create(todoForCreation: Todo): void {
    this.store.dispatch(createTodo({ payload: todoForCreation }));
  }

  delete(todoForDeletion: Todo): void {
    this.store.dispatch(deleteTodo({ payload: todoForDeletion }));
  }

  checkOrUncheck(todoForUpdate: Todo): void {
    this.store.dispatch(toggleCompleteTodo({ payload: todoForUpdate }));
  }

  navigateToEditPage(todo: Todo) {
    this.router.navigate(['..', 'todo', 'edit', todo.id]);
  }
}
