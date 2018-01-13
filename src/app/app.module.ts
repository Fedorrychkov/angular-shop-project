import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { StorageService } from './service/storage.service';
import { ConfigService } from './service/config.service';
import { EventService } from './service/event.service';
import { RestService } from './service/rest.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { ConfirmService } from './service/confirm.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    TranslateModule
  ],
  providers: [
    StorageService,
    AuthGuard,
    ConfigService,
    RestService,
    AuthService,
    EventService,
    ConfirmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
