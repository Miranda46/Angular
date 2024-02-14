import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from './../../services/countries.service';
import { SharedModule } from "../../../shared/shared.module";
import { CountriesTableComponent } from "../../components/countries-table/countries-table.component";

@Component({
    selector: 'countries-by-capital-page',
    standalone: true,
    templateUrl: './by-capital-page.component.html',
    styles: `img {
      width: 25px;
    }`,
    imports: [SharedModule, CommonModule, CountriesTableComponent]
})
export class ByCapitalPageComponent implements OnInit {
  public isLoading : boolean = false;
  public countries : Country[] = [];
  public initialValue: string = '';

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital ( value : string ): void {
    this.isLoading = true;
    this.countriesService.searchCapital( value )
      .subscribe(countries => {
        this.countries = countries,
        this.isLoading = false;});

}}
