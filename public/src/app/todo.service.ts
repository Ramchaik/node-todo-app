import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

Todo;
@Injectable()
export class TodoService {
  private todoApiURL = '/api/todos/John';

  constructor(private http: HttpClient) {}

  getTodos(): Promise<Todo[]> {
    return this.http
      .get(this.todoApiURL)
      .toPromise()
      .then((res) => res as Todo[]);
  }
}
