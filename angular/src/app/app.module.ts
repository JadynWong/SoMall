import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// akita tools
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

// #region Http拦截器
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { DefaultInterceptor } from '@core';
const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];
// #endregion

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '@env/environment';


import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';

// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/tmp/i18n/', '.json');
}

/** 配置 angular i18n **/
import { NZ_I18N, zh_CN, NZ_DATE_FNS_COMPATIBLE } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { OssService } from 'src/store/oss/oss.service';
import { OssProxyService } from 'src/api/appService';
import { OssStore } from 'src/store/oss/oss.store';
registerLocaleData(zh);


export function initData(httpClient: HttpClient) {
  // 假設有個 API 包含了基本的設定
  return () => httpClient.get('https://jsonplaceholder.typicode.com/todos/').toPromise();
}


@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    LayoutModule,
    SharedModule.forRoot(),
    RoutesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    environment.production ? [] : AkitaNgDevtools
  ],
  providers: [...INTERCEPTOR_PROVIDES,
  { provide: NZ_I18N, useValue: zh_CN },
  { provide: NZ_DATE_FNS_COMPATIBLE, useValue: true }
  // ,{
  //   provide: APP_INITIALIZER,
  //   useFactory: (ossService: OssService) => (ossStore: OssStore, ossApi: OssProxyService) => ossService.init,
  //   deps: [OssService],
  //   multi: true
  // }
],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
