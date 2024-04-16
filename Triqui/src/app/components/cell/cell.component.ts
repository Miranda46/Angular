import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CellsService } from '../../services/cells.service';
import { Symbol } from '../../interfaces/symbols.type';

@Component({
  selector: 'components-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent {
  public clicked : boolean = false;
  public turn : Symbol = '';
  public isSymbolX = false;
  
  @Input()
  public cellNumber! : number;
  @Output()
  public onWin : EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private cellsService : CellsService){}


  manageClick() : void {
    this.clicked = true;
    this.turn = this.cellsService.manageTurn(this.cellNumber);
    if (this.turn === "X"){this.isSymbolX = true;}
  }

}
