import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { todos } from "./components/todos/todos.component";
import { todo } from "./components/todo/todo.component";

@NgModule({
  declarations: [AppComponent, todos, todo],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
