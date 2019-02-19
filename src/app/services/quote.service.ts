import {Inject, Injectable} from '@angular/core';
// import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Quote} from '../domain/quote.model';
import { map } from 'rxjs/operators';
import { debug } from '../utils/debug.util';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class QuoteService {

  constructor(@Inject('BASE_CONFIG') private config,
  private httpClient: HttpClient) {
  }

  getQuote(): Observable<Quote> {
    const uri = `${this.config.uri}/quotes/${Math.floor(Math.random() * 10)}`;
    return this.httpClient.get(uri)
      .pipe(debug('quote: '), map((res: Quote) => res as Quote));
      
  }
}
