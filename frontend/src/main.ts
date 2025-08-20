import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import 'zone.js';

bootstrapApplication(App, {
    providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
    appConfig
}).catch((err) => console.error(err));
