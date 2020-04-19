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
    this.todoService.getTodos().subscribe(todos => {
      this.todoItems = todos;
    });
  }

  deleteTodo(todoToDelete: todoModel) {
    // console.log(todoToDelete);
    this.todoItems = this.todoItems.filter(t => t.id !== todoToDelete.id);
    this.todoService.deleteTodo(todoToDelete).subscribe();
  }

  addTodo(todoToAdd: any) {
    this.todoService.addTodo(todoToAdd).subscribe(t => this.todoItems.push(t));
  }
}
