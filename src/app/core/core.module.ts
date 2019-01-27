import {NgModule, Optional, SkipSelf} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule} from '../shared/shared.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {loadSvgResources} from '../utils/svg.util';
import { HttpModule } from "@angular/http";
@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    if (parent) {
      throw new Error('CoreModule already loaded，please only import it in AppModule ');
    }
    loadSvgResources(iconRegistry, sanitizer);
  }
}
