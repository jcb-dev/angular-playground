import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  private sidebarBehaviorSubject$ = new BehaviorSubject<boolean>(false);
  sidebar$ = this.sidebarBehaviorSubject$.asObservable();

  toggleSidebar() {
    let newValue = !this.sidebarBehaviorSubject$.getValue();
    this.sidebarBehaviorSubject$.next(newValue)
  }
}
