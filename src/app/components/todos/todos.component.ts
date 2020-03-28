import { Component, OnInit } from "@angular/core";
import { todoModel } from "../../models/todoModel";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class todos implements OnInit {
  todoItems: todoModel[];

  // constructor() {}

  ngOnInit() {
    this.todoItems = [
      {
        id: 1,
        title: "test1",
        completed: false
      },
      {
        id: 2,
        title: "test2",
        completed: true
      }
    ];
  }
}
