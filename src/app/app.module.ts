import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './shared/dynamic-table/dynamic-table.component';
import { UseTableComponent } from './components/use-table/use-table.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';

export function initApp(http: HttpClient, translate: TranslateService) {
  return () => new Promise<boolean>((resolve: (res: boolean) => void) => {

    const defaultLocale = 'en';
    const translationsUrl = '/assets/i18n';
    const sufix = '.json';
    const storageLocale = localStorage.getItem('locale');
    const locale = storageLocale || defaultLocale;

    forkJoin([
      http.get(`/assets/i18n/en.json`).pipe(
        catchError(() => of(null))
      ),
      http.get(`${translationsUrl}/${locale}${sufix}`).pipe(
        catchError(() => of(null))
      )
    ]).subscribe((response: any[]) => {
      const devKeys = response[0];
      const translatedKeys = response[1];

      translate.setTranslation(defaultLocale, devKeys || {});
      translate.setTranslation(locale, translatedKeys || {}, true);

      translate.setDefaultLang(defaultLocale);
      translate.use(locale);

      resolve(true);
    });
  });
}
@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    UseTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot()
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initApp,
    deps: [HttpClient, TranslateService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
