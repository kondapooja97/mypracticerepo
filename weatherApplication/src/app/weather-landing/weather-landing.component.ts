import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-landing',
  templateUrl: './weather-landing.component.html',
  styleUrls: ['./weather-landing.component.scss']
})
export class WeatherLandingComponent {
  data:any;
  constructor(private WeatherService:WeatherService){}

  getWeatherDetails(city:any){
    this.WeatherService.getWeatherData(city).subscribe((res)=>{
      console.log(res);
      this.data=res;
    })
  }
}
