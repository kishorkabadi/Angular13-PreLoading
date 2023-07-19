import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { CompanyModule } from './company/company.module';
import { CustomPreloadStratgyService } from './custom-preload-stratgy.service';

const routes: Routes = [
  {
    path:'company',
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),//Angular16 syntax
    //loadChildren:'app/company/company.module#CompanyModule',Angular13 syntax
    data:{preLoad:true}
  },
  {
    path:'person',
    loadChildren: () => import('./person/person.module').then(m => m.PersonModule),
    //loadChildren:'app/person/person.module#CersonModule',Angular13 syntax
    data:{preLoad:true}
  },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule), data:{preLoad:true,delay:true} },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'Department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      //preloadingStrategy:PreloadAllModules // Preloading modules
      preloadingStrategy:CustomPreloadStratgyService // Custom Preloading modules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor()
  {
console.log('AppRouting Module loaded');

  }
 }





















