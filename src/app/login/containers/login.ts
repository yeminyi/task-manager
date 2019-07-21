import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Quote} from '../../domain';
import * as fromRoot from '../../reducers';
import * as authActions from '../../actions/auth.action';
import * as actions from '../../actions/quote.action';

@Component({
  selector: 'app-login',
  template: `
  <form fxLayout="row" fxLayout.xs="column" fxLayoutAlign="center" [formGroup]="form" (ngSubmit)="onSubmit(form, $event)">
    <mat-card fxFlex="0 1 20rem">
      <mat-card-header>
        <mat-card-title> {{'login' | translate}}：</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-form-field class="full-width">
          <input matInput type="text" placeholder="{{'login.youremail' | translate}}" formControlName="email">
          <mat-error>用户名是必填项哦</mat-error>
        </mat-form-field>
        <mat-form-field class="full-width">
          <input matInput type="password" placeholder="{{'login.yourpsw' | translate}}" formControlName="password">
          <mat-error>密码不正确哦</mat-error>
        </mat-form-field>
        <button mat-raised-button type="submit" [disabled]="!form.valid">{{'login.signin' | translate}}</button>
      </mat-card-content>
      <mat-card-actions class="text-right">
        <p>{{'login.noaccount' | translate}}? <a routerLink="/register">{{'login.signup' | translate}}</a></p>
        <p> <a routerLink="/forgot">{{'login.forgotpsw' | translate}}?</a></p>
      </mat-card-actions>
    </mat-card>
    <mat-card fxFlex="0 1 20rem">
      <mat-card-header>
        <mat-card-title> </mat-card-title>
        <mat-card-subtitle>
          {{ (quote$ | async)?.cn }}
        </mat-card-subtitle>
      </mat-card-header>
      <img matCardImage [src]="(quote$ | async)?.pic">
      <mat-card-content>
        <p> {{ (quote$ | async)?.en }}</p>
      </mat-card-content>
    </mat-card>
  </form>
  `,
  styles: [`
  .text-right {
    margin: 10px;
    text-align: end;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  quote$: Observable<Quote>;

  constructor(private fb: FormBuilder,
              private store$: Store<fromRoot.State>) {
    this.quote$ = this.store$.pipe(select(fromRoot.getQuoteState));
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['amy@126.com', Validators.compose([Validators.required, Validators.email])],
      password: ['123456', Validators.required]
    });
    this.store$.dispatch({type: actions.QUOTE});
  }

  onSubmit({value, valid}: FormGroup, e: Event) {
    e.preventDefault();
    if (!valid) {
      return;
    }
    this.store$.dispatch(
      new authActions.LoginAction(value));
  }
}
