import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL : string = 'https://restcountries.com/v3.1';


  constructor( private httpClient: HttpClient ) { }


  searchCapital( term: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiURL}/capital/${ term }`)
    .pipe(
      catchError( error => of([]) )
    );
  }

  searchCountry( term: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiURL}/name/${ term }`)
    .pipe(
      catchError( () => of([]))
    );
  }

  searchRegion( region: string ) : Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiURL}/region/${ region }`)
      .pipe(
        catchError( () => of([]))
      )
  }

  searchCountryByAlphaCode( code: string ) : Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.apiURL}/alpha/${ code }`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null),
        catchError( () => of(null))
      )
  }

}
