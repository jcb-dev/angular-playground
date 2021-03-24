import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  private documentClickedTargetSubject$: Subject<HTMLElement> = new Subject<HTMLElement>();
  documentClickedTarget$ = this.documentClickedTargetSubject$.asObservable();

  private isMobileSubject$: Subject<boolean> = new Subject<boolean>();
  isMobile$ = this.isMobileSubject$.asObservable();

  clicked(event: any) {
    this.documentClickedTargetSubject$.next(event.target);
  }

  isMobile(width: any) {
    let isMobile = false;

    if (width <= 600)
      isMobile = true;

    this.isMobileSubject$.next(isMobile);
  }
}
