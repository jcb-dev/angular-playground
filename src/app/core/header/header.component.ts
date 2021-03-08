import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../services/layout.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  template: ``,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  layoutSubscription: Subscription;
  showSidebar: boolean;

  barIcon = faBars;

  constructor() { }

  ngOnInit(): void {
  }


  ngOnDestroy() {
  }

}
