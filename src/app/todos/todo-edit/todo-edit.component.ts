import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Todo } from '../models/todo';
import { TodosService } from '../shared/todos-api.service';

@Component({
  selector: 'ws-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(paramMap => this.todosService.getById(paramMap.get('id')))
      )
      .subscribe(todo => (this.todo = todo));
  }
}
