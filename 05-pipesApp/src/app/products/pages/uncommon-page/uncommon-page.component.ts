import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNGModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [CommonModule, PrimeNGModule],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
    public name : string = "Pederson";
    public gender : 'male'|'female' = 'male';

    invitationMap = {
      male:"invitarlo",
      female:"invitarla"
    }

    changePerson() : void {
      this.name = "Draculaura";
      this.gender = "female";
    }

    //i18nPlural

    public invitados : string[] = ["anuel", "bad bunny", "Arkangel", "Ñengo flow", "Yandel", "Daddy Yankee", "Tokischa", "Doble P", "luigi 21+"];

    invitadosMapping = {
      "=0":"No hay invitados en la cola de espera.",
      "=1":"Hay un (1) invitado en la cola de espera.",
      "other":"Hay # invitados en la cola de espera."
    }

    deleteInvitado(){
      this.invitados.splice(0, 1);
    }
}
