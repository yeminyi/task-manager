import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
<<<<<<< HEAD
import { hmrBootstrap } from './hmr';
/**
 * HammerJS needed to import here to make universal build works
 */
import 'hammerjs';
=======
>>>>>>> master

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
});
=======
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
>>>>>>> master
