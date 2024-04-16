import { Component, Input, Output } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { CommonModule } from '@angular/common';
import { CellsService } from '../../services/cells.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'components-cell-grid',
  standalone: true,
  imports: [CellComponent, CommonModule],
  templateUrl: './cell-grid.component.html',
  styleUrl: './cell-grid.component.css'
})
export class CellGridComponent {
  public isOverSubscription? : Subscription;

  @Output()
  public isOver = false;

  constructor(private cellsService : CellsService){
      this.isOverSubscription = cellsService.overYet.subscribe((value) =>{
      this.manageWin()
    });
  }

  
  manageWin(){
    console.log("aaaa")
    this.isOver = true;
  }

  refresh(){
    window.location.reload()
  }
}
