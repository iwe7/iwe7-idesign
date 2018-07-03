import { Iwe7ErrorHandler } from './services/iwe7-error.service';
// @angular
import { NgModule, ErrorHandler } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';

// @ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { AppEffects } from './effects/app.effects';
import { CustomSerializer } from './reducers/iwe7-router.reducer';
import { reducers, metaReducers } from './reducers/index';

// ng-zerror-antd
import { NgZorroAntdModule } from 'ng-zorro-antd';
// @delon
import { DelonFormModule } from '@delon/form';
import { DelonABCModule } from '@delon/abc';

/** 配置 angular i18n **/
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { Iwe7PagesModule } from './iwe7-pages/iwe7-pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
    // StoreRouterConnectingModule.forRoot({
    //   stateKey: 'Iwe7Router'
    // }),
    RouterModule.forRoot([], { useHash: true }),
    Iwe7PagesModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    DelonABCModule.forRoot(),
    BrowserAnimationsModule,
    DelonFormModule.forRoot()
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: ErrorHandler, useClass: Iwe7ErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
