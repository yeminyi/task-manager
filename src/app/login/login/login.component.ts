import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['amy@m1y.tech', Validators.compose([Validators.required, Validators.email])],
      password: ['amy123456', Validators.required]
    });
  
  }

  onSubmit({value, valid}, e: Event) {
    e.preventDefault();
    if (!valid) {
      return;
    }
  }
}
