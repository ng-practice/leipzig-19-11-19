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
  }

  checkOrUncheckTodo(todoForUpdate: Todo) {
    this.todos = this.todos.map(todo =>
      todo.text === todoForUpdate.text
        ? { ...todo, isDone: !todo.isDone }
        : todo
    );
  }
}
