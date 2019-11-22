import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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

  private readonly todosApi = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  query(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosApi);
  }

  create(todo: Todo): Observable<Todo[]> {
    return this.http
      .post<Todo>(this.todosApi, todo)
      .pipe(switchMap(() => this.query()));
  }

  checkOrUncheck(todo: Todo): Observable<Todo[]> {
    todo.isDone = !todo.isDone;
    return this.http
      .put<Todo>(`${this.todosApi}/${todo.id}`, todo)
      .pipe(switchMap(() => this.query()));
  }

  delete(todo: Todo): Observable<Todo[]> {
    return this.http
      .delete<Todo>(`${this.todosApi}/${todo.id}`)
      .pipe(switchMap(() => this.query()));
  }
}
