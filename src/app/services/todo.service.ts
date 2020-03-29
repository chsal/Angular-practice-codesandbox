import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { todoModel } from "../models/todoModel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosUrs: string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit: string = "?_limit=5";

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<todoModel[]> {
    return this.httpClient.get<todoModel[]>(
      `${this.todosUrs}${this.todosLimit}`
    );
  }
}
