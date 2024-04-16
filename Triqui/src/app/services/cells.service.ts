import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Symbol } from '../interfaces/symbols.type';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CellsService {
  overYet: Subject<boolean> = new Subject<boolean>();
  constructor() {
   }
  public turn: Symbol = 'X';
  public turnNumber: number = 0;
  public casillas: Symbol[] = ["","","","","","","","",""];
  public isOver : boolean = false;
  
 
  manageTurn(cellNumber : number): Symbol {
    this.turn === "O" ? this.turn = "X" : this.turn = "O";
    this.casillas[cellNumber] = this.turn
    this.turnNumber++;
    if (this.manageWinCondition()){
      this.isOver = true;
      this.overYet.next(this.isOver);
      this.win();
    }
    if (this.turnNumber === 9 && !this.isOver){
        this.manageEnd();
    }

    return this.turn;
  }

  manageEnd(){alert('se acabou, no contest')};
  
  manageWinCondition() : boolean {
    //verticales
    let winCondition1  = (this.casillas[0]!== "" && this.casillas[0] === this.casillas[3] && this.casillas[3] === this.casillas[6]);
    let winCondition2  = (this.casillas[1]!== "" && this.casillas[1] === this.casillas[4] && this.casillas[4] === this.casillas[7]);
    let winCondition3  = (this.casillas[2]!== "" && this.casillas[2] === this.casillas[5] && this.casillas[5] === this.casillas[8]);

    //horizontales
    let winCondition4  = (this.casillas[0]!== "" && this.casillas[0] === this.casillas[1] && this.casillas[1] === this.casillas[2]);
    let winCondition5  = (this.casillas[3]!== "" && this.casillas[3] === this.casillas[4] && this.casillas[4] === this.casillas[5]);
    let winCondition6  = (this.casillas[6]!== "" && this.casillas[6] === this.casillas[7] && this.casillas[7] === this.casillas[8]);

    //diagonales
    let winCondition7  = (this.casillas[0]!== "" && this.casillas[0] === this.casillas[4] && this.casillas[4] === this.casillas[8]);
    let winCondition8  = (this.casillas[2]!== "" && this.casillas[2] === this.casillas[4] && this.casillas[4] === this.casillas[6]);
    return winCondition1 || winCondition2 || winCondition3 || winCondition4 || winCondition5 || winCondition6 || winCondition7 || winCondition8;
  };

  win() : void {
    setTimeout(()=> {
      console.log("its over");
      alert('It is over, winner: ' + this.turn);
      },
      100);
  }
}
