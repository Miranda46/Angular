import { Injectable } from '@angular/core';

const GIPHY_API_KEY = 'WCbDJllDdsdQnGdAsbP6aHRKij0VbP4A'

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];


  constructor() { }


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

  }

  async searchTag( tag:string ):Promise<void>  {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    fetch('https://api.giphy.com/v1/gifs/search?api_key=WCbDJllDdsdQnGdAsbP6aHRKij0VbP4A&q=Valor&limit=10')
      .then (resp => resp.json())
      .then (data => console.log(data));

    // this._tagsHistory.unshift( tag );

  }

}
