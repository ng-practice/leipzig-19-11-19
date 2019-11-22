import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';
import { TodoQuickAddComponent } from './todo-quick-add/todo-quick-add.component';
import { TodosComponent } from './todos.component';
import { SortByTextPipe } from './shared/sort-by-text.pipe';

@NgModule({
  declarations: [
    TodoCheckerComponent,
    TodosComponent,
    TodoQuickAddComponent,
    SortByTextPipe
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [TodosComponent]
})
export class TodosModule {}
