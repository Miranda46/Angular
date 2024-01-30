import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';
import { OutletContext } from '@angular/router';


@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();


    public character: Character = {
      name: 'aaa',
      power: 0
    }

    emitCharacter() :void {
      if (this.character.name === '') return ;

      this.onNewCharacter.emit(this.character);

      this.character = {name:'', power:0}
    }
}
