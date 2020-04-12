import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { todoModel } from "../../models/todoModel";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class todo implements OnInit {
  @Input() todoData: todoModel;
  @Output() todoDeleter: EventEmitter<todoModel> = new EventEmitter();
  ngOninit() {}

  constructor(private todoService: TodoService) {}

  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todoData.completed
    };
    return classes;
  }

  onToggle(todoDataToToggle) {
    todoDataToToggle.completed = !todoDataToToggle.completed;
    this.todoService
      .toggleCompleted(todoDataToToggle)
      .subscribe(todo => console.log(todo));
  }

  onDelete(todoDataToDelete) {
    this.todoDeleter.emit(todoDataToDelete);
  }
}
