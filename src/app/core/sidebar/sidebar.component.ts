import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { LayoutService } from '../services/layout.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  layoutSubscription: Subscription;
  utilSubscription: Subscription;
  showSidebar: boolean;
  isInside: boolean = false;

  constructor(private _layoutService: LayoutService,
    private _utilService: UtilService) {
  }

  ngOnInit(): void {
    this.layoutSubscription = this._layoutService.sidebar$.subscribe(value => {
      this.showSidebar = value;
    });

    // this.utilSubscription = this._utilService.documentClickedTarget.subscribe(target => {
    //   this.documentClickListener(target);
    // });
  }

  ngOnDestroy() {
    this.layoutSubscription.unsubscribe();
  }

  toggleSidebar() {
    this._layoutService.toggleSidebar();
  }

  // documentClickListener(target: any): void {
  //   if (this.sidebar.nativeElement.contains(target))
  //     console.log(1);
  //   else {
  //     console.log(2);
  //   }
  // }

  // @ViewChild('sidebar') sidebar;
}
