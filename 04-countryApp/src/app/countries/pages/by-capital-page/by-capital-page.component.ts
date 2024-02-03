import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from './../../services/countries.service';
import { SharedModule } from "../../../shared/shared.module";

@Component({
    selector: 'countries-by-capital-page',
    standalone: true,
    templateUrl: './by-capital-page.component.html',
    styles: ``,
    imports: [SharedModule, CommonModule]
})
export class ByCapitalPageComponent {

  public countries : Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByCapital ( value : string ): void {
    this.countriesService.searchCapital( value )
      .subscribe(countries => this.countries = countries);

}}
