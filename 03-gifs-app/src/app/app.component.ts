import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { HomePageComponent } from "./gifs/pages/home-page/home-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SharedModule, GifsModule, HomePageComponent, HttpClientModule]
})
export class AppComponent {
  title = 'gifs-app';
}
