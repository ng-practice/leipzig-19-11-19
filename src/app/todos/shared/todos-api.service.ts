import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private readonly todosApi = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.todosApi}/${id}`);
  }

  query(param?: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `${this.todosApi}?query=${param ? param : 'all'}`
    );
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosApi, todo);
  }

  checkOrUncheck(todo: Todo): Observable<Todo> {
    todo.isDone = !todo.isDone;
    return this.http.put<Todo>(`${this.todosApi}/${todo.id}`, todo);
  }

  delete(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.todosApi}/${todo.id}`);
  }
}
