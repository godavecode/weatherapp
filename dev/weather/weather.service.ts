import {Injectable} from "angular2/core";
import {WEATHER_ITEMS} from "./weather.data";
import {Observable} from 'rxjs/Observable';
import { Http } from "angular2/http";
import 'rxjs/Rx';
import {WeatherItem} from "./weather-item";
@Injectable()
export class WeatherService
{
  constructor (private _http: Http) {}

  getWeatherItems(){
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem) {
      WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=2df23596828066857d949bd68c841d33&units=imperial')
      .map(response => response.json())
      .catch(error => {
          console.error(error);
          return Observable.throw(error.json())
      });
  }
}
