import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api'
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { MenuComponent } from "./source/components/menu/menu.component";
import LocaleESCO from "@angular/common/locales/es-CO"
import LocaleDe from "@angular/common/locales/de"

registerLocaleData(LocaleESCO);
registerLocaleData(LocaleDe);

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
