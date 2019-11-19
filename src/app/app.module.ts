import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';

@NgModule({
  declarations: [AppComponent, TodoCheckerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
