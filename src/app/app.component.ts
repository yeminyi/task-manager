import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  private _dark = false;
  get dark() {
    return this._dark;
  }
  switchDarkTheme(dark: boolean) {
    this._dark = dark;
  }
}
