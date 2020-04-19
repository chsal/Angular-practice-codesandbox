import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"]
})
export class addTodo implements Oninit {
  title: string;
  @Output() todoAdder: EventEmitter<any> = new EventEmitter();

  // constructor() {}

  ngOninti() {}

  OnSubmit() {
    const todo = {
      title: this.title,
      completed: false
    };

    this.todoAdder.emit(todo);
  }
}
