import { Component } from '@angular/core';
import { PrimeNGModule } from '../../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'products-basics-page',
  standalone: true,
  imports: [PrimeNGModule, CommonModule],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower = 'asurbanipal';
  public nameUpper = 'ASURBANIPAL';
  public fullName = 'aSurBaNiPaL dE ASIriA';

  public customDate : Date = new Date();

}
