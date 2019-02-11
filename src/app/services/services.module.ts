import {NgModule} from '@angular/core';
import {QuoteService} from "../services/quote.service";

@NgModule()
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService,
      ]
    };
  }
}
