import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from '../layouts/components/header/header.component';
import { FooterComponent } from '../layouts/components/footer/footer.component';
import { SidebarComponent } from '../layouts/components/sidebar/sidebar.component';
import { HamburgerComponent } from '../layouts/components/hamburger/hamburger.component';

import { LayoutService } from './services/layout.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UtilService } from './services/util.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, HamburgerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HamburgerComponent
  ],
  providers: [
    LayoutService,
    UtilService
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}
