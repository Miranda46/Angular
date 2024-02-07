import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { SharedModule } from "../../../shared/shared.module";
import { CommonModule } from '@angular/common';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesTableComponent } from "../../components/countries-table/countries-table.component";

@Component({
    selector: 'countries-by-country-page',
    standalone: true,
    templateUrl: './by-country-page.component.html',
    styles: `
    img {
      width:25px;
    }`,
    imports: [SharedModule, CommonModule, CountriesTableComponent]
})
export class ByCountryPageComponent {
  public isLoading : boolean = false;
  public countries : Country[] = [];

  constructor( private countriesServices : CountriesService){}

  searchByCountry( term : string ) {
    this.isLoading = true;
    this.countriesServices.searchCountry( term )
      .subscribe( (countries) => {
        this.countries = countries
        this.isLoading = false;}
        );
  }



}
