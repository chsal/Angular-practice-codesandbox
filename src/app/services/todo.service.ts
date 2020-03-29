import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}

  getTodos() {
    return [
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
