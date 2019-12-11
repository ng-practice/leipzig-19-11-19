import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorNotifier } from './shared/http-error-notifier.service';
import { TodosModule } from './todos/todos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodosModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorNotifier,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
