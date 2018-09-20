import { enableProdMode, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production ) {
  enableProdMode();
  console.log('Oraginal production')
}

if(!isDevMode()) {
  enableProdMode();
  console.log('Test Production production')
}



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
