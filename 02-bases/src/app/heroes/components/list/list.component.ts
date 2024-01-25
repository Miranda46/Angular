import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Batman', 'Hulk', 'Spiderman', 'Rorschach']
  public deletedHero?:string;


  removeLastHero(): void{

    this.deletedHero = this.heroNames.pop();

    // console.log({ deletedHero })
  }
}
