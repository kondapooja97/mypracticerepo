import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  url1 = '&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric';

  constructor(private httpClient: HttpClient) { }

  getWeatherData(city: any) {
    return this.httpClient.get(this.url + city + this.url1);
  }
}
