import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { ConfigLoaderService } from './shared/services/loader/config-loader.service';
import { LogLoaderService } from './shared/services/log/log-loader.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: init, deps: [ConfigLoaderService], multi: true },
    { provide: APP_INITIALIZER, useFactory: logPublisherFactory, deps: [LogLoaderService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function init(config: ConfigLoaderService) {
  return () => config.load();
}

export function logPublisherFactory(provider: LogLoaderService) {
  return () => provider.load();
}
