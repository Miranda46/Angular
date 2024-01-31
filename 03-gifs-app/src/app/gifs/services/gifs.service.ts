import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { stringify } from 'uuid';

const GIPHY_API_KEY = 'WCbDJllDdsdQnGdAsbP6aHRKij0VbP4A'
const SERVICE_URL = 'https://api.giphy.com/v1/gifs'

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];

  public gifList : Gif[] = [];


  constructor(
    private http: HttpClient
    ) {
      this.loadLocalStorage();
      console.log('gifs service working');
      this.loadFromHistory();
    }


  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(newTag : string) {
    newTag = newTag.toLowerCase();

    if (this._tagsHistory.includes(newTag)){
      this._tagsHistory = this._tagsHistory.filter( (tag) => tag !== newTag);
    }

    this._tagsHistory.unshift( newTag )
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();

  }

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{
    if ( !localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
  }

  private loadFromHistory(): void {
    if (this._tagsHistory){
      this.searchTag(this._tagsHistory.at(0)!)
    }
  }

  searchTag( tag:string ):void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('limit', '10')
      .set('q', tag );

    this.http.get<SearchResponse>(`${ SERVICE_URL }/search`, { params })
    .subscribe( resp => {


      this.gifList = resp.data;
      console.log( { gifs : this.gifList });
    })


    // fetch('https://api.giphy.com/v1/gifs/search?api_key=WCbDJllDdsdQnGdAsbP6aHRKij0VbP4A&q=Valor&limit=10')
    //   .then (resp => resp.json())
    //   .then (data => console.log(data));

    // this._tagsHistory.unshift( tag );

  }

}
