import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNGModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [PrimeNGModule, CommonModule],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {


  public grossIncome : number = 21500010;
  public percentage : number = 0.66;
  public netIncome : number = this.grossIncome * this.percentage;
  

}
