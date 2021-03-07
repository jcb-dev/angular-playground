import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  animations: [
    trigger('expandSideBar', [
      state('show', style({
        width: '*',
        opacity: 1
      })),
      state('hide', style({
        width: '0',
        opacity: 0
      })),
      transition('show => hide', [
        animate('250ms', style({ width: '0', opacity: 0 }))
      ]),
      transition('hide => show', [
        animate('250ms', style({ width: '*', opacity: 1 }))
      ]),
    ])
  ]
})

export class BaseLayoutComponent implements OnInit, OnDestroy {
  layoutSubscription: Subscription;

  showSidebar: boolean;
  constructor(private _layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutSubscription = this._layoutService.sidebar$.subscribe(value => {
      this.showSidebar = value;
    });
  }

  ngOnDestroy() {
    this.layoutSubscription.unsubscribe();
  }
}
