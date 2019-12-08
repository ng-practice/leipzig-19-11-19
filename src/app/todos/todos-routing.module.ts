import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  { path: 'todos/:query', component: TodosComponent },
  { path: 'todo/edit/:id', component: TodoEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {}
