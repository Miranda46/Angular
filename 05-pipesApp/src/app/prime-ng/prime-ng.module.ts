import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';



@NgModule({
    exports: [ButtonModule, MenuModule, MenubarModule, PanelModule, CardModule, FieldsetModule],

})
export class PrimeNGModule { }
