import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FieldAttributes } from 'src/app/shared/models/field.model';
import { ToDo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormsService {

  private API_URL = "http://localhost:3000";

  private todoListBehaviorSubject$ = new BehaviorSubject<ToDo[]>(null);
  private todoBehaviorSubject$ = new BehaviorSubject<ToDo>(new ToDo());

  constructor(private http: HttpClient) { }

  public get todoList(): Observable<ToDo[]> {
    return this.todoListBehaviorSubject$.asObservable();
  }

  public get todo(): Observable<ToDo> {
    return this.todoBehaviorSubject$.asObservable();
  }

  getTodoFields() {
    return this.http.get<FieldAttributes[]>(this.API_URL + '/form');
  }

  getTodoList() {
    return this.http.get<ToDo[]>(this.API_URL + '/todo')
      .subscribe((value) => {
        this.todoListBehaviorSubject$.next(value);
      });
  }

  setTodoList(model: string, value: any) {
    const currentValue = this.todoBehaviorSubject$.getValue();
    currentValue[model] = value;
    this.todoBehaviorSubject$.next(currentValue);
  }
}
