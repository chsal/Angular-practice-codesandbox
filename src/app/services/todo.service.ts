import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { todoModel } from "../models/todoModel";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit: string = "?_limit=5";

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<todoModel[]> {
    return this.httpClient.get<todoModel[]>(
      `${this.todosUrl}${this.todosLimit}`
    );
  }

  toggleCompleted(todo: todoModel): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.httpClient.put(url, todo, httpOptions);
  }
}
