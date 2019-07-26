<<<<<<< HEAD
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../domain';

@Injectable()
export class QuoteService {
  // private uri: string = 'https://api.hzy.pw/saying/v1/ciba';
  constructor(@Inject('BASE_CONFIG') private config: { uri: string },
    private http: HttpClient) {
=======
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
>>>>>>> master
  }

  getQuote(): Observable<Quote> {
    const uri = `${this.config.uri}/quotes/${Math.floor(Math.random() * 10)}`;
<<<<<<< HEAD
    return this.http.get<Quote>(uri);
=======
    return this.httpClient.get(uri)
      .pipe(debug('quote: '), map((res: Quote) => res as Quote));
      
>>>>>>> master
  }
}
