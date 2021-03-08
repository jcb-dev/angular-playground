import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  documentClickedTarget: Subject<HTMLElement> = new Subject<HTMLElement>();

  constructor() { }
}
