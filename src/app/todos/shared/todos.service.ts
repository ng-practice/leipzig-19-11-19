import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  query(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  create(todo: Todo): Observable<Todo> {
    todo.id = Math.random().toString();
    return this.http.post<Todo>(`http://localhost:3000/todos`, todo);
  }

  checkOrUncheck(todo: Todo): Observable<Todo> {
    todo.isDone = !todo.isDone;
    return this.http.put<Todo>(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  delete(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`http://localhost:3000/todos/${todo.id}`);
  }
}
