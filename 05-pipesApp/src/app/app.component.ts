import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api'
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { MenuComponent } from "./source/components/menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, PrimeNGModule, MenuComponent]
})
export class AppComponent {

  constructor (private primengConfig : PrimeNGConfig) {};

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  public title = 'eL kaMARon teNEBRoSo';
}
