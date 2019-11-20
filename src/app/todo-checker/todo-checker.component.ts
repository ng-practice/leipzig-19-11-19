import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-checker',
  templateUrl: './todo-checker.component.html',
  styleUrls: ['./todo-checker.component.scss']
})
export class TodoCheckerComponent {
  todo = {
    text: 'Ride 🚴‍♀️ back 🏡',
    isDone: false
  };

  emitToggle() {
    alert(`${this.todo.text} has been clicked. 🤗`);
  }
}
