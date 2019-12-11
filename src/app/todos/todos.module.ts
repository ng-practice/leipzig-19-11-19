import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SortByTextPipe } from './shared/sort-by-text.pipe';
import { reducers } from './store';
import { TodosEffects } from './store/todos.effects';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoQuickAddComponent } from './todo-quick-add/todo-quick-add.component';
import { TodosLinkNavigationComponent } from './todos-link-navigation/todos-link-navigation.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [
    TodoCheckerComponent,
    TodosComponent,
    TodoQuickAddComponent,
    SortByTextPipe,
    TodosLinkNavigationComponent,
    TodoEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TodosRoutingModule,
    StoreModule.forFeature('todos', reducers),
    EffectsModule.forFeature([TodosEffects])
  ],
  exports: [TodosComponent]
})
export class TodosModule {}
