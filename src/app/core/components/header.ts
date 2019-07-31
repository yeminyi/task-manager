import {ChangeDetectionStrategy, Component, EventEmitter, Output, Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="onClick()" *ngIf="auth">
        <mat-icon>menu</mat-icon>
      </button>
      <span>{{'projectname' | translate}}</span>
      <button mat-button [matMenuTriggerFor]="menu">{{'language' | translate}}</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="useChinese()">中文</button>
        <button mat-menu-item (click)="useEnglish()">English</button>
      </mat-menu>
      <span class="fill-remaining-space"></span>
      <mat-slide-toggle (change)="onChange($event.checked)">{{'darktheme' | translate}}</mat-slide-toggle>
      <span><a mat-button *ngIf="auth" (click)="handleLogout()">{{'signout' | translate}}</a></span>
    </mat-toolbar>
  `,
  styles: [`
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(public translate: TranslateService){
    translate.addLangs(['cn', 'en']);	// Add
    translate.setDefaultLang('en');		// Set default
    translate.use('en');				// use the language
  }
  @Input() auth = false;
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();
  @Output() logout = new EventEmitter();

  onClick() {
    this.toggle.emit();
  }

  handleLogout() {
    this.logout.emit();
  }

  onChange(checked: boolean) {
    this.toggleDarkTheme.emit(checked);
  }
  useEnglish() {
    this.translate.use('en');
  }

  useChinese() {
    this.translate.use('cn');
  }
}
