import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { PersonRoutingModule } from './person/person-routing.module';


@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule {
  constructor()
  {
    console.log('Person Module Loaded');
  }
 }
