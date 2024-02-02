import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'gifs-card-list',
    standalone: true,
    templateUrl: './card-list.component.html',
    imports: [CommonModule, CardComponent]
})
export class CardListComponent {

  @Input()
  public gifs : Gif[] = [];



}
