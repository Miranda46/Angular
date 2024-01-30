import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string>= new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {name: 'Trunks',
    power: 23}
    ]

    // onDeleteCharacter(index: number):void{
    //   console.log(index);
    // }

    deleteCharacterbyID(id?: string):void{
      if (!id) return;
      this.onDelete.emit(id);
    }
}
