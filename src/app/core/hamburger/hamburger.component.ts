import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-hamburger',
  template:
    `<button #sidebarButton (click)="toggleSidebar()">
      <fa-icon [icon]="barIcon" size="2x"></fa-icon>
    </button>` ,
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  layoutSubscription: Subscription;
  barIcon = faBars;

  constructor(private _layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutSubscription = this._layoutService.sidebar$.subscribe(value => {
    });
  }


  toggleSidebar() {
    this._layoutService.toggleSidebar();
  }

}
