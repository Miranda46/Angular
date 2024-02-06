import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';
import { SharedModule } from "../../../shared/shared.module";
import { CommonModule } from '@angular/common';
import { CountriesTableComponent } from "../../components/countries-table/countries-table.component";

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

  constructor( private countriesService : CountriesService ) {}

  searchByRegion( region : string ) {
    this.countriesService.searchRegion( region )
      .subscribe( (countries) => this.countries = countries );
  }

}
