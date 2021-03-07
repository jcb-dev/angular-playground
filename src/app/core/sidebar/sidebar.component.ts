import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  layoutSubscription: Subscription;

  showSidebar: boolean;

  constructor(private _layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutSubscription = this._layoutService.sidebar$.subscribe(value => {
      this.showSidebar = value;
    })
  }

  ngOnDestroy() {
    this.layoutSubscription.unsubscribe();
  }
}
