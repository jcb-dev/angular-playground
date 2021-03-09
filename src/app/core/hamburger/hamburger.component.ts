import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-hamburger',
  template:
    `<button #sidebarButton (click)="toggleSidebar()">
      <fa-icon *ngIf="!showSidebar" [icon]="hamburgerIcon" size="2x"></fa-icon>
      <fa-icon *ngIf="showSidebar"[icon]="closeIcon" size="2x"></fa-icon>
    </button>` ,
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  private layoutSubscription: Subscription;

  private hamburgerIcon = faBars;
  private closeIcon = faTimes;

  showSidebar: boolean;

  constructor(private _layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutSubscription = this._layoutService.sidebar$.subscribe(value => {
      this.showSidebar = value;
    });
  }

  toggleSidebar() {
    this._layoutService.toggleSidebar();
  }

}
