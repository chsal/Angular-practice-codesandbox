import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { todos } from "./components/todos/todos.component";
import { todo } from "./components/todo/todo.component";
import { header } from "./components/layout/header/header.component";
import { addTodo } from "./components/add-todo/add-todo.component";

@NgModule({
  declarations: [AppComponent, todos, todo, header, addTodo],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
