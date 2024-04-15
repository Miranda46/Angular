import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'components-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent {
  public clicked = false;
  public turn = "O";

  manageClick() {
    this.clicked = true;
    this.turn === "O" ? this.turn = "X" : this.turn = "O";
  }

}
