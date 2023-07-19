import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyRoutingModule } from './company/company-routing.module';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule {
  constructor()
  {
    console.log('Company Module Loaded');
  }
 }
