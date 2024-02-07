import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';
import { SharedModule } from "../../../shared/shared.module";
import { CountriesTableComponent } from "../../components/countries-table/countries-table.component";


type Region  = 'Africa'| 'Asia'|'Americas'|'Oceania'|'Europe';

@Component({
    selector: 'countries-by-region-page',
    standalone: true,
    templateUrl: './by-region-page.component.html',
    styles: `
    img { width:25px;}`,
    imports: [SharedModule, CommonModule, CountriesTableComponent]
})
export class ByRegionPageComponent {

  public countries : Country[] = [];
  public isLoading : boolean = false;
  public regions : Region[] = ['Africa', 'Asia', 'Americas', 'Oceania', 'Europe'];
  public selectedRegion? : Region;

  constructor( private countriesService : CountriesService ) {}

  searchByRegion( region : Region ) {
    this.selectedRegion = region;
    this.isLoading = true;

    this.countriesService.searchRegion( region )
      .subscribe( (countries) => {
      this.countries = countries;
      this.isLoading = false;}
      );

  
    
    
  }

}
