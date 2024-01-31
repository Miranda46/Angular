import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {

  constructor(private gifsService : GifsService) {

  }

  @Input()
  public gif : Gif[] = [];
  
}
