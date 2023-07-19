import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//commented to implement lazy loading............
// import {CompanyModule}  from './company/company.module';
// import { PersonModule } from './person/person.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CompanyModule,//Module Binding commented to implement lazy loading
    // PersonModule//Module Binding commented to implement lazy loading
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
