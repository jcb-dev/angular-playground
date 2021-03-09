import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  animations: [
    trigger('moveContent', [
      state('move', style({
        padding: '0 0 0 250px',
      })),
      state('reset', style({
        padding: '0',
      })),
      state('shadow', style({
        padding: '0',
      })),
      transition('reset => move', [
        animate("300ms ease-out")
      ]),
      transition('move => reset', [
        animate("300ms ease-out")
      ]),
    ]),
    trigger('showSidebar', [
      transition(':enter',
        [
          style({ width: "0", opacity: 0 }),
          animate('300ms ease-out',
            style({ width: 250, opacity: 1 }))
        ]
      ),
      transition(':leave',
        [
          style({ width: 250 }),
          animate('300ms ease-out',
            style({ width: 0 }))
        ]
      ),
    ])
  ]
})

export class BaseLayoutComponent implements OnInit, OnDestroy {


  constructor(
    private _layoutService: LayoutService,
    private _utilService: UtilService) {
    this.getScreenWidth();
  }

  @ViewChild('content', { static: false }) content: ElementRef;

  private layoutSubscription: Subscription;
  private utilSubscription: Subscription;

  private screenWidth: number;

  showSidebar: boolean;

  ngOnInit(): void {
    this.layoutSubscription = this._layoutService.sidebar$.subscribe(value => {
      this.showSidebar = value;
    });

    this.utilSubscription = this._utilService.documentClickedTarget.subscribe(target => {
      this.documentClickListener(target);
    });
  }

  ngOnDestroy() {
    this.layoutSubscription.unsubscribe();
    this.utilSubscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  getScreenWidth(event?) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    this._utilService.documentClickedTarget.next(event.target)
  }

  documentClickListener(target: any): void {
    if (this.showSidebar)
      if (this.content.nativeElement.contains(target))
        this._layoutService.toggleSidebar();
  }

  setContentState() {
    let state = 'reset';
    if (this.screenWidth > 768) {
      if (this.showSidebar)
        state = 'move'
    }
    return state;
  }
}
