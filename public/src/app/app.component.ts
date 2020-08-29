import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Node Todo</h1>
    <ul>
      <li *ngFor="let todo of todos">{{ todo.todo }} - {{ todo.isDone }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css'],
  providers: [TodoService],
})
export class AppComponent {
  title = 'node-todo';
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  getTodos(): void {
    this.todoService.getTodos().then((todos) => (this.todos = todos));
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
