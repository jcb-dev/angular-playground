import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSidebar: boolean;

  constructor(private _layoutService: LayoutService) { }

  ngOnInit(): void {
    this._layoutService.sidebar$.subscribe(value => {
      this.showSidebar = value;
      console.log(this.showSidebar);
    });
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    this._layoutService.toggleSidebar(this.showSidebar);
  }

}
