import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, CountriesRoutingModule
  ]
})
export class CountriesModule { }
