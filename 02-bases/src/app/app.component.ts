import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CounterModule, HeroesModule]

})
export class AppComponent {

  public title : string = 'Hellow World';

}
