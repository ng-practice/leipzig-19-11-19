import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[] = [
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

  create(newTodo: Todo): Todo[] {
    this.todos.push(newTodo);
    return this.todos;
  }

  update(todoForUpdate: Todo): Todo[] {
    this.todos = this.todos.map(todo =>
      todo.text === todoForUpdate.text
        ? { ...todo, isDone: !todo.isDone }
        : todo
    );

    return this.todos;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
