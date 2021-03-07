import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  animations: [
    trigger('expandSideBar', [
      state('show', style({
        left: '0',
      })),
      state('hide', style({
        left: '-250px',
      })),
      transition('show => hide', [
        animate('250ms')
      ]),
      transition('hide => show', [
        animate('250ms')
      ]),
    ]),

    trigger('moveContent', [
      state('move', style({
        padding: '0 0 0 250px',
      })),
      state('reset', style({
        padding: '0',
      })),
      transition('reset => move', [
        animate('250ms')
      ]),
      transition('move => reset', [
        animate('250ms')
      ]),
    ])
  ]
})

export class BaseLayoutComponent implements OnInit, OnDestroy {
  layoutSubscription: Subscription;

  showSidebar: boolean;
  screenHeight: number;
  screenWidth: number;

  constructor(private _layoutService: LayoutService) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.layoutSubscription = this._layoutService.sidebar$.subscribe(value => {
      this.showSidebar = value;
    });
  }

  ngOnDestroy() {
    this.layoutSubscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  // sets the state of trigger moveContent 
  setContentState() {
    let state = 'reset';
    if (this.screenWidth > 768) {
      if (this.showSidebar)
        state = 'move'
    }
    return state;
  }

}
