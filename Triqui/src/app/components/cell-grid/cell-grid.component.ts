import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'components-cell-grid',
  standalone: true,
  imports: [CellComponent, CommonModule],
  templateUrl: './cell-grid.component.html',
  styleUrl: './cell-grid.component.css'
})
export class CellGridComponent {

  public turn = "O";


  manageTurn(){
    
  }
}
