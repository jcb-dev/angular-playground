import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  layoutSubscription: Subscription;
  showSidebar: boolean;

  constructor(private _layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutSubscription = this._layoutService.sidebar$.subscribe(value => {
      this.showSidebar = value;
    });
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    this._layoutService.toggleSidebar(this.showSidebar);
  }

  ngOnDestroy() {
    this.layoutSubscription.unsubscribe();
  }

}
