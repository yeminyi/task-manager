import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar color="primary">
      <span class="fill-remaining-space"></span>
      <span>Copyright © 2019 M1Y Tech Demo</span>
      <span class="fill-remaining-space"></span>
    </mat-toolbar>
  `,
  styles: [`
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
