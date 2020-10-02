import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './shared/dynamic-table/dynamic-table.component';
import { UseTableComponent } from './components/use-table/use-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    UseTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
