import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { todos } from "./components/todos/todos.component";
import { todo } from "./components/todo/todo.component";
import { header } from "./components/layout/header/header.component";

@NgModule({
  declarations: [AppComponent, todos, todo, header],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
