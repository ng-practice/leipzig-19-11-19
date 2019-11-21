import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'ws-todo-quick-add',
  templateUrl: './todo-quick-add.component.html',
  styleUrls: ['./todo-quick-add.component.scss']
})
export class TodoQuickAddComponent {
  @Output() create = new EventEmitter<Todo>();

  emitCreate(input: HTMLInputElement) {
    this.create.emit({
      text: input.value,
      isDone: false
    });
  }
}
