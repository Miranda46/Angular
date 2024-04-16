import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CellGridComponent } from "./components/cell-grid/cell-grid.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CellGridComponent]
})
export class AppComponent {
  title = 'triqui';
}
