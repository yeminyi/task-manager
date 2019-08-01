import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  NgModule,
  OnInit,
  OnDestroy,
  EventEmitter,
  Output
} from '@angular/core';
import {StyleManager} from '../style-manager/style-manager';
import {ThemeStorage, DocsSiteTheme} from './theme-storage/theme-storage';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CommonModule} from '@angular/common';
import {OverlayContainer} from '@angular/cdk/overlay';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {map, filter} from 'rxjs/operators';


@Component({
  selector: 'theme-picker',
  templateUrl: 'theme-picker.html',
  styleUrls: ['theme-picker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {'aria-hidden': 'true'},
})
export class ThemePicker implements OnInit, OnDestroy {
  private _queryParamSubscription = Subscription.EMPTY;
  currentTheme: DocsSiteTheme;
  @Output() themeChange = new EventEmitter<string>();
  themes: DocsSiteTheme[] = [
    {
      primary: '#009688',
      accent: '#FFC107',
      name: 'green',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#607d8b',
      accent: '#4CAF50',
      name: 'dark',
      isDark: true,
    },
    // {
    //   primary: '#673AB7',
    //   accent: '#FFC107',
    //   name: 'deeppurple-amber',
    //   isDark: false,
    // },
    // {
    //   primary: '#3F51B5',
    //   accent: '#E91E63',
    //   name: 'indigo-pink',
    //   isDark: false,
    //   isDefault: true,
    // },
    // {
    //   primary: '#E91E63',
    //   accent: '#607D8B',
    //   name: 'pink-bluegrey',
    //   isDark: true,
    // },
    // {
    //   primary: '#9C27B0',
    //   accent: '#4CAF50',
    //   name: 'purple-green',
    //   isDark: true,
    // },
  ];

  constructor(
    public styleManager: StyleManager,
    private _themeStorage: ThemeStorage,
    private _activatedRoute: ActivatedRoute,
    private oc: OverlayContainer,
    ) {
    // this.installTheme(this._themeStorage.getStoredThemeName());
  }

  ngOnInit() {
    // this._queryParamSubscription = this._activatedRoute.queryParamMap
    //   .pipe(map(params => params.get('theme')), filter(Boolean))
    //   .subscribe(themeName => this.installTheme(themeName));
    // this.installTheme('pink-bluegrey')
  }

  ngOnDestroy() {
    this._queryParamSubscription.unsubscribe();
  }
  // 这里没有使用，用于注册 touched 状态
  // public registerOnTouched() {}
  // private propagateChange = (_: any) => {};

  // // 列表元素选择发生改变触发
  // onChange(themeName: string) {
  //   console.log('themepicker');

  //   this.installTheme(themeName);
  //   // 更新表单
  //   this.propagateChange(themeName);
  //   this.themeChange.emit(themeName);
  // }
  // public registerOnChange(fn: any) {
  //   this.propagateChange = fn;
  // }

  installTheme(themeName: string) {
    const theme = this.themes.find(currentTheme => currentTheme.name === themeName);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;
    console.log(this.currentTheme);

    // if (theme.isDefault) {
    //   this.styleManager.removeStyle('theme');
    // } else {
    //   this.styleManager.setStyle('theme', `assets/${theme.name}.scss`);
    // }
    // if (theme.isDefault) {
    //   this.oc.getContainerElement().classList.add('myapp-dark-theme');
    // } else {
    //   this.oc.getContainerElement().classList.remove('myapp-dark-theme');
    // }
    if (this.currentTheme) {
      this._themeStorage.storeTheme(this.currentTheme);
    }
    this.themeChange.emit(themeName);
  }
}

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatTooltipModule,
    CommonModule
  ],
  exports: [ThemePicker],
  declarations: [ThemePicker],
  providers: [
    StyleManager,
    ThemeStorage],
})
export class ThemePickerModule { }
