import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherLandingComponent } from './weather-landing/weather-landing.component';

const routes: Routes = [
  {path:"weather-landing",component:WeatherLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
