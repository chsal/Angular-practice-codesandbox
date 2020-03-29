import { Component, OnInit } from "@angular/core";
import { todoModel } from "../../models/todoModel";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class todos implements OnInit {
  todoItems: todoModel[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoItems = this.todoService.getTodos();
  }
}
