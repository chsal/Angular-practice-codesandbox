import { Component, OnInit, Input } from "@angular/core";
import { todoModel } from "../../models/todoModel";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class todo implements OnInit {
  @Input() todoData: todoModel;
  ngOninit() {}

  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todoData.completed
    };
    return classes;
  }
}
