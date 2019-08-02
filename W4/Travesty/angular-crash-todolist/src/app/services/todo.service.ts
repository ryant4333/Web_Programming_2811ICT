import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://my-json-server.typicode.com/ryant4333/demo/db'
  
  constructor(private http:HttpClient) {
  }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }
}
