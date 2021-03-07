import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  layoutSubscription: Subscription;

  showSidebar: boolean;
  constructor(private _layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutSubscription = this._layoutService.sidebar$.subscribe(value => {
      this.showSidebar = value;
    });
  }

}
