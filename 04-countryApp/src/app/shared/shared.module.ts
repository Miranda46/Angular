import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  imports: [
    CommonModule, HomePageComponent, AboutPageComponent, SidebarComponent
  ],
  exports:[HomePageComponent, AboutPageComponent, SidebarComponent]
})
export class SharedModule { }
