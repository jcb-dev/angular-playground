import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { LayoutService } from '../services/layout.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('showSidebar', [
      transition(':enter', [
        style({ width: 0 }),
        animate(250, style({ width: '*' }))
      ]),
      transition(':leave', [
        style({ width: '*' }),
        animate(250, style({ width: 0 }))
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  private layoutSubscription: Subscription;
  private utilSubscription: Subscription;
  showSidebar: boolean;

  constructor(private _layoutService: LayoutService) {
  }

  ngOnInit(): void {
    this.layoutSubscription = this._layoutService.sidebar$.subscribe(value => {
      this.showSidebar = value;
    });
  }

  ngOnDestroy() {
    this.layoutSubscription.unsubscribe();
  }

  toggleSidebar() {
    this._layoutService.toggleSidebar();
  }
}
