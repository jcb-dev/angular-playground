import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutService } from './services/layout.service';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  providers: [
    LayoutService
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}
