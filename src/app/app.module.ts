import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PaystackService } from './paystack.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routeComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PaystackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
