import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.fillEditForm();
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  updateTodo(): void {
    this.sink = this.todosService.update(this.todoEditForm.value).subscribe();
  }

  private declareEditForm(): FormGroup {
    return this.fb.group({
      id: [null, Validators.required],
      text: ['', Validators.required],
      isDone: [false]
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
