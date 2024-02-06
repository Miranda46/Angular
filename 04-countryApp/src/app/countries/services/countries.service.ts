import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, delay } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL : string = 'https://restcountries.com/v3.1';

  getCountriesRequest( url : string ) : Observable<Country[]> {
    return this.httpClient.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) ),
        delay(2000)
        )
        ;
  }


  constructor( private httpClient: HttpClient ) { }


  searchCapital( term: string ): Observable<Country[]> {
    const url : string = `${this.apiURL}/capital/${ term }`;
    return this.getCountriesRequest( url );
    ;
  }

  searchCountry( term: string ): Observable<Country[]> {
    const url : string = `${this.apiURL}/name/${ term }`;
    return this.getCountriesRequest( url );
  }

  searchRegion( region: string ) : Observable<Country[]> {
    const url : string = `${this.apiURL}/region/${ region }`;
    return this.getCountriesRequest( url );
  }

  searchCountryByAlphaCode( code: string ) : Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.apiURL}/alpha/${ code }`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null),
        catchError( () => of(null))
      )
  }

}
