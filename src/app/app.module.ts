import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {OverloadStrategyModule} from '../../projects/ngx-overload/src/lib/overload-strategy/overload-strategy.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OverloadStrategyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
