import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { PaystackService } from './paystack.service';
import { HttpClientModule } from '@angular/common/http';
import { DropdownDirective } from './dropdown.directive';
import { TestingComponent } from './components/testing/testing.component';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routeComponents,
    DropdownDirective,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PaystackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
