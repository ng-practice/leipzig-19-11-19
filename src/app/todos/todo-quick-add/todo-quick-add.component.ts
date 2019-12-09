import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo';

@Component({
  selector: 'ws-todo-quick-add',
  templateUrl: './todo-quick-add.component.html',
  styleUrls: ['./todo-quick-add.component.scss']
})
export class TodoQuickAddComponent {
  text = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.pattern(/^@(.?)+/)
  ]);

  @Output() create = new EventEmitter<Todo>();

  emitCreate() {
    if (this.text.invalid) {
      return;
    }

    this.create.emit({
      text: this.text.value,
      isDone: false
    });

    this.text.reset();
  }
}
