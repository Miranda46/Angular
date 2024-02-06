import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from "../../../shared/shared.module";
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries.interfaces';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'countries-country-page',
    standalone: true,
    templateUrl: './country-page.component.html',
    styles: ``,
    imports: [SharedModule, CommonModule]
})
export class CountryPageComponent implements OnInit {
  country?: Country;
  router : Router = new Router;
  constructor(
    private activatedRoute : ActivatedRoute,
    private countriesService : CountriesService
  ) {}

    ngOnInit(): void {
      this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id )),
        )
        .subscribe( country => {
          if (!country){
            return this.router.navigateByUrl('');
          }
          return this.country = country;
        })


    //     .subscribe( ({ id }) => {
    //       this.countriesService.searchCountryByAlphaCode( id )
    //         .subscribe( country => {
    //           console.log({ country })
    //         });
    // });
    }

}
