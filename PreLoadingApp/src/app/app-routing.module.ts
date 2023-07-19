import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyModule } from './company/company.module';

const routes: Routes = [
  {
    path:'company',
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)//Angular16 syntax
    //loadChildren:'app/company/company.module#CompanyModule',Angular13 syntax
  },
  {
    path:'person',
    loadChildren: () => import('./person/person.module').then(m => m.PersonModule)
    //loadChildren:'app/person/person.module#CersonModule',Angular13 syntax
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





















