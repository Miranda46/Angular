import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterLink } from '@angular/router';



@NgModule({
  imports: [
    CommonModule, HomePageComponent, AboutPageComponent, SidebarComponent, SearchBoxComponent, RouterLink
  ],
  exports:[HomePageComponent, AboutPageComponent, SidebarComponent, SearchBoxComponent, RouterLink]
})
export class SharedModule { }
