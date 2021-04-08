import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FieldAttributes } from 'src/app/shared/models/field.model';
import { map } from 'rxjs/operators';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormsService {

  private API_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  private personSubject$: Subject<Person> = new Subject<Person>();
  person$ = this.personSubject$.asObservable();

  getForm() {
    return this.http.get<FieldAttributes[]>(this.API_URL + '/form');
  }

  addPerson(field: Person) {
    return this.http.post(this.API_URL + '/person', field);
  }
}
