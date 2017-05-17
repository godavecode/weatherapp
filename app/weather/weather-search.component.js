System.register(["angular2/core", "./weather.service", "./weather-item", "rxjs/Subject"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_service_1, weather_item_1, Subject_1;
    var WeatherSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            WeatherSearchComponent = (function () {
                function WeatherSearchComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.searchStream = new Subject_1.Subject();
                    this.data = {};
                }
                WeatherSearchComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this._weatherService.searchWeatherData(form.value.location)
                        .subscribe(function (data) {
                        var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, data.main.temp);
                        _this._weatherService.addWeatherItem(weatherItem);
                    });
                };
                WeatherSearchComponent.prototype.onSearchLocation = function (cityName) {
                    this.searchStream
                        .next(cityName);
                };
                WeatherSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.searchStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (input) { return _this._weatherService.searchWeatherData(input); })
                        .subscribe(function (data) { return _this.data = data; });
                };
                WeatherSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-search',
                        template: "\n    <section class=\"weather-search\">\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <label for=\"city\">City</label>\n        <input ngControl =\"location\" type=\"text\" id=\"city\" (input)=\"onSearchLocation(input.value)\" required #input>\n        <button type=\"submit\">Add City</button>\n      </form>\n      <div>\n        <span class=\"info\">City found:</span> {{ data.name }}\n      </div>\n    </section>\n  "
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherSearchComponent);
                return WeatherSearchComponent;
            }());
            exports_1("WeatherSearchComponent", WeatherSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQUlFLGdDQUFxQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUg1QyxpQkFBWSxHQUFHLElBQUksaUJBQU8sRUFBVSxDQUFDO29CQUM3QyxTQUFJLEdBQU8sRUFBRSxDQUFDO2dCQUV5QyxDQUFDO2dCQUV4RCx5Q0FBUSxHQUFSLFVBQVMsSUFBa0I7b0JBQTNCLGlCQVFDO29CQVBDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7eUJBQ3RELFNBQVMsQ0FDTixVQUFBLElBQUk7d0JBQ0YsSUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDNUYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ25ELENBQUMsQ0FDSixDQUFDO2dCQUNSLENBQUM7Z0JBQ0QsaURBQWdCLEdBQWhCLFVBQWlCLFFBQWdCO29CQUMvQixJQUFJLENBQUMsWUFBWTt5QkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0QseUNBQVEsR0FBUjtvQkFBQSxpQkFRQztvQkFQQyxJQUFJLENBQUMsWUFBWTt5QkFDZCxZQUFZLENBQUMsR0FBRyxDQUFDO3lCQUNqQixvQkFBb0IsRUFBRTt5QkFDdEIsU0FBUyxDQUFDLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQzt5QkFDMUUsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQ3pCLENBQUM7Z0JBQ04sQ0FBQztnQkEzQ0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsMGJBV1Q7cUJBQ0YsQ0FBQzs7MENBQUE7Z0JBOEJGLDZCQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCRCwyREE0QkMsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3dlYXRoZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7V2VhdGhlclNlcnZpY2V9IGZyb20gXCIuL3dlYXRoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci1pdGVtXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3ZWF0aGVyLXNlYXJjaCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3ZWF0aGVyLXNlYXJjaFwiPlxuICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj5DaXR5PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5nQ29udHJvbCA9XCJsb2NhdGlvblwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjaXR5XCIgKGlucHV0KT1cIm9uU2VhcmNoTG9jYXRpb24oaW5wdXQudmFsdWUpXCIgcmVxdWlyZWQgI2lucHV0PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgQ2l0eTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvXCI+Q2l0eSBmb3VuZDo8L3NwYW4+IHt7IGRhdGEubmFtZSB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgV2VhdGhlclNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgc2VhcmNoU3RyZWFtID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBkYXRhOiBhbnkgPXt9O1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpIHt9XG5cbiAgb25TdWJtaXQoZm9ybTogQ29udHJvbEdyb3VwKSB7XG4gICAgdGhpcy5fd2VhdGhlclNlcnZpY2Uuc2VhcmNoV2VhdGhlckRhdGEoZm9ybS52YWx1ZS5sb2NhdGlvbilcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB3ZWF0aGVySXRlbSA9IG5ldyBXZWF0aGVySXRlbShkYXRhLm5hbWUsIGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiwgZGF0YS5tYWluLnRlbXApO1xuICAgICAgICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5hZGRXZWF0aGVySXRlbSh3ZWF0aGVySXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gIH1cbiAgb25TZWFyY2hMb2NhdGlvbihjaXR5TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWFyY2hTdHJlYW1cbiAgICAgIC5uZXh0KGNpdHlOYW1lKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlYXJjaFN0cmVhbVxuICAgICAgLmRlYm91bmNlVGltZSgzMDApXG4gICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgLnN3aXRjaE1hcCgoaW5wdXQ6c3RyaW5nKSA9PiB0aGlzLl93ZWF0aGVyU2VydmljZS5zZWFyY2hXZWF0aGVyRGF0YShpbnB1dCkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHRoaXMuZGF0YSA9IGRhdGFcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==
