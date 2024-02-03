import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL : string = 'https://restcountries.com/v3.1';


  constructor( private httpClient: HttpClient ) { }


  searchCapital( term: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiURL}/capital/${ term }`);
  }



}
