import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { CommonService } from './shared/services/common.service';
import { StorageService } from './shared/services/storage.service';
import { MyhttpService } from './shared/services/myhttp.service';
import { SortablejsModule } from 'angular-sortablejs/dist';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AuthGuardService } from './auth-guard.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    SortablejsModule.forRoot({
      animation: 200,
    }),
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    LoadingBarRouterModule
  ],
  providers: [
    CommonService,
    StorageService,
    MyhttpService,
    AuthGuardService,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
