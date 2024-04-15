import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell/cell.component';
import { CellGridComponent } from './cell-grid/cell-grid.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, CellComponent, CellGridComponent
  ],
  exports: [CellComponent, CellGridComponent]
})
export class ComponentsModule { }
