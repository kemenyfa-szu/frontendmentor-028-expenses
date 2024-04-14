import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { SpendingComponent } from './spending/spending.component';

@NgModule({
  declarations: [AppComponent, BalanceComponent, SpendingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
