import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { SharedModule } from "../../../shared/shared.module";
import { CommonModule } from '@angular/common';
import { Country } from '../../interfaces/countries.interfaces';

@Component({
    selector: 'countries-by-country-page',
    standalone: true,
    templateUrl: './by-country-page.component.html',
    styles: `
    img {
      width:25px;
    }`,
    imports: [SharedModule, CommonModule]
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  constructor( private countriesServices : CountriesService){}

  searchByCountry( term : string ) {
    this.countriesServices.searchCountry( term )
      .subscribe( (countries) => this.countries = countries);
  }



}
