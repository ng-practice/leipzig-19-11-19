import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';
import { TodoQuickAddComponent } from './todo-quick-add/todo-quick-add.component';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodoCheckerComponent, TodosComponent, TodoQuickAddComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [TodosComponent]
})
export class TodosModule {}
