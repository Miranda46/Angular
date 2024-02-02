import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';
import { LazyImageComponent } from "../../../shared/components/lazy-image/lazy-image.component";

@Component({
    selector: 'gifs-card',
    standalone: true,
    templateUrl: './card.component.html',
    imports: [CommonModule, LazyImageComponent]
})
export class CardComponent implements OnInit{

  constructor() {

  }

  @Input()
  public gif! : Gif

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required')
  }

}
