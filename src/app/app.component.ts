import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  squareState:string;
  private _dark = false;
  constructor(private oc:OverlayContainer){}
  get dark() {
    return this._dark;
  }
  switchDarkTheme(dark: boolean) {
    this._dark = dark;
    this.oc.getContainerElement().classList.add( dark?'myapp-dark-theme':null);
  }

}
