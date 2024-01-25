import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'spiderman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero():void {
    this.name = 'Batman';
  }

  changeAge():void {
    this.age = 99;
  }

  resetInfo():void{
    this.age = 45;
    this.name = 'spiderman'
  }
}
