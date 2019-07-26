import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {Observable} from 'rxjs/Observable';
import {Quote} from '../../domain/quote.model';
import { QuoteService } from 'src/app/services/quote.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  quote:Quote=
  {
    "id": "2",
    "cn": "不要只因一次挫败，就放弃你原来决心想达到的梦想。（莎士比亚）",
    "en": "Do not, for one repulse, forgo the purpose that you resolved to effect.",
    "pic": "/assets/img/quotes/2.jpg"
  };

  constructor(private fb: FormBuilder,
              private quoteService$:QuoteService) {
    this.quoteService$ 
      .getQuote()
      .subscribe(q=>this.quote=q);
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
