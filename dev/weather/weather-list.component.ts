import {Component, OnInit} from "angular2/core";
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from "./weather-item";
import {WeatherService} from "./weather.service";

/* Repeat this weather-item component as often as we have in the
// WeatherItem[] array; for each element in the array, I need a
weather-item */
@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
            <weather-item *ngFor="#weatherItem of weatherItems" [item]="weatherItem"></weather-item>
        </section>
    `,
    directives: [WeatherItemComponent]
})
export class WeatherListComponent implements OnInit {
  // Use Angular2 lifecycle hook and implement interface
  weatherItems: WeatherItem[];

  constructor(private _weatherService: WeatherService) {}

  // Implement ngOnInit method
  // will be called after the weatherlist component has been constructed
  // and is initialized
  ngOnInit(): any{
    this.weatherItems = this._weatherService.getWeatherItems();
  }

  // Make equal to WEATHER_ITEMS exported array
  // weatherItems: WeatherItem[] = WEATHER_ITEMS;
}
