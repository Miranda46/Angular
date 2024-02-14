import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { SharedModule } from "../../../shared/shared.module";
import { CommonModule } from '@angular/common';
import { CountriesTableComponent } from "../../components/countries-table/countries-table.component";
import { Country } from '../../interfaces/countries.interfaces';

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
export class ByCountryPageComponent implements OnInit {
  public isLoading : boolean = false;
  public countries : Country[] = [];
  public initialValue: string = '';

  constructor( private countriesServices : CountriesService ){}

  ngOnInit(): void {
    this.initialValue = this.countriesServices.cacheStore.byCountry.term;
    this.countries    = this.countriesServices.cacheStore.byCountry.countries;
  }

  searchByCountry( term : string ) {
    this.isLoading = true;
    this.countriesServices.searchCountry( term )
      .subscribe( (countries) => {
        this.countries = countries
        this.isLoading = false;}
        );
  }



}
