import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('showSidebar', [
      transition(':enter', [
        style({ width: 0 , opacity: 0 }),
        animate(150, style({ width: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ width: '*', opacity: 1 }),
        animate(150, style({ width: 0, opacity: 0 }))
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
