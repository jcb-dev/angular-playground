import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private sidebarBehaviorSubject = new BehaviorSubject<boolean>(false);
  sidebar$ = this.sidebarBehaviorSubject.asObservable();

  constructor() { }

  toggleSidebar(value: boolean) {
    this.sidebarBehaviorSubject.next(value)
  }
}
