import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNGModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'shared-menu',
  standalone: true,
  imports: [
    CommonModule, PrimeNGModule
  ],
  templateUrl: 'menu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent { 

  public menuItems : MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: "Pipes de Angular",
        icon: 'pi pi-desktop',
        items: [
          {
            label: "Textos y Fechas",
            icon: 'pi pi-align-left'
          },
          {
            label: "Números",
            icon: 'pi pi-dollar'
          },
          {
            label: "No Comunes",
            icon: 'pi pi-globe'
          },
        ]
      },
      {
        label: "Pipes Personalizados",
        icon: 'pi pi-fw pi-download',
        items: [
          {
            label: "Otro Elemento",
            icon: 'pi pi-cog',
            items:
            [{
              label: "Otro Elemento",
              icon: "pi pi-truck"
            }]
          },
        ]
      },
    ]
  }
}
