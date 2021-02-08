import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InicializacaoRouteModule } from './inicializacao-route.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    InicializacaoRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
