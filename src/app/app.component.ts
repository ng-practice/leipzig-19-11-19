import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [
    {
      text: 'Make 100 🏋️‍♂️',
      isDone: false
    },
    {
      text: 'Ride to porsche 🏎',
      isDone: true
    },
    {
      text: 'Ride 🚴‍♀️ back 🏡',
      isDone: false
    }
  ];

  addToList(newTodo: Todo) {
    this.todos.push(newTodo);
    this.sortAsc();
  }

  sortAsc() {
    this.todos.sort((current, next) => current.text.localeCompare(next.text));
  }
  sortDesc() {
    this.todos.sort((current, next) => next.text.localeCompare(current.text));
  }

  checkOrUncheckTodo(todoForUpdate: Todo) {
    this.todos = this.todos.map(todo =>
      todo.text === todoForUpdate.text
        ? { ...todo, isDone: !todo.isDone }
        : todo
    );
  }
}
