import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TodosService } from '../shared/todos-api.service';

@Component({
  selector: 'ws-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit, OnDestroy {
  sink = Subscription.EMPTY;
  todoEditForm = this.declareEditForm();

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService
  ) {}

  ngOnInit() {
    this.fillEditForm();
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  updateTodo() {
    this.sink = this.todosService.update(this.todoEditForm.value).subscribe();
  }

  private declareEditForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(null, Validators.required),
      text: new FormControl('', Validators.required),
      isDone: new FormControl(false)
    });
  }

  private fillEditForm(): void {
    this.route.paramMap
      .pipe(
        switchMap(paramMap => this.todosService.getById(paramMap.get('id')))
      )
      .subscribe(todo => this.todoEditForm.patchValue(todo));
  }
}
