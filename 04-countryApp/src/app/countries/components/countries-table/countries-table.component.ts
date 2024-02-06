import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './countries-table.component.html',
  styles: `img {
    width: 25px;
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesTableComponent {

  @Input()
  public countries : Country[] = [];

}
