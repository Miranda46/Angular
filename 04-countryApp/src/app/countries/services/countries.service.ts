import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, delay, tap } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL : string = 'https://restcountries.com/v3.1';

  getCountriesRequest( url : string ) : Observable<Country[]> {
    return this.httpClient.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) ),
        delay(500)
        )
        ;
  }

  public cacheStore : CacheStore = {
    byCountry: {term:'', countries:[]},
    byCapital: {term:'', countries:[]},
    byRegion:  {  countries:[] },
  }


  constructor( private httpClient: HttpClient ) { 
    this.loadFromLocalStorage();
  }

  saveToLocalStorage() : void {
    localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ) );
  }

  loadFromLocalStorage() : void {
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }


  searchCapital( term: string ): Observable<Country[]> {
    const url : string = `${this.apiURL}/capital/${ term }`;
    return this.getCountriesRequest( url )
      .pipe(
      tap( countries => this.cacheStore.byCapital = { term, countries }, ),
      tap( () => this.saveToLocalStorage() )
    );
  }

  searchCountry( term: string ): Observable<Country[]> {
    const url : string = `${this.apiURL}/name/${ term }`;
    return this.getCountriesRequest( url )
      .pipe(
        tap( countries => this.cacheStore.byCountry = { term, countries }),
        tap(  () => this.saveToLocalStorage() )
      )
  }

  searchRegion( region: Region ) : Observable<Country[]> {
    const url : string = `${this.apiURL}/region/${ region }`;
    return this.getCountriesRequest( url )
      .pipe(
      tap( countries => this.cacheStore.byRegion = { region, countries }),
      tap(  () => this.saveToLocalStorage() ))
  }

  searchCountryByAlphaCode( code: string ) : Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.apiURL}/alpha/${ code }`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null),
        catchError( () => of(null))
      )
  }

}
