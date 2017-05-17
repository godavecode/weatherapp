System.register(["angular2/core", "./weather-item.component", "./weather.service"], function(exports_1, context_1) {
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
    var core_1, weather_item_component_1, weather_service_1;
    var WeatherListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_component_1_1) {
                weather_item_component_1 = weather_item_component_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            /* Repeat this weather-item component as often as we have in the
            // WeatherItem[] array; for each element in the array, I need a
            weather-item */
            WeatherListComponent = (function () {
                function WeatherListComponent(_weatherService) {
                    this._weatherService = _weatherService;
                }
                // Implement ngOnInit method
                // will be called after the weatherlist component has been constructed
                // and is initialized
                WeatherListComponent.prototype.ngOnInit = function () {
                    this.weatherItems = this._weatherService.getWeatherItems();
                };
                WeatherListComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-list',
                        template: "\n        <section class=\"weather-list\">\n            <weather-item *ngFor=\"#weatherItem of weatherItems\" [item]=\"weatherItem\"></weather-item>\n        </section>\n    ",
                        directives: [weather_item_component_1.WeatherItemComponent]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherListComponent);
                return WeatherListComponent;
            }());
            exports_1("WeatherListComponent", WeatherListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBOzsyQkFFZTtZQVVmO2dCQUlFLDhCQUFvQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUFHLENBQUM7Z0JBRXZELDRCQUE0QjtnQkFDNUIsc0VBQXNFO2dCQUN0RSxxQkFBcUI7Z0JBQ3JCLHVDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUM3RCxDQUFDO2dCQXBCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsZ0xBSVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLENBQUM7cUJBQ3JDLENBQUM7O3dDQUFBO2dCQWdCRiwyQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQsdURBZUMsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3dlYXRoZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtXZWF0aGVySXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vd2VhdGhlci1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci1pdGVtXCI7XG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlfSBmcm9tIFwiLi93ZWF0aGVyLnNlcnZpY2VcIjtcblxuLyogUmVwZWF0IHRoaXMgd2VhdGhlci1pdGVtIGNvbXBvbmVudCBhcyBvZnRlbiBhcyB3ZSBoYXZlIGluIHRoZVxuLy8gV2VhdGhlckl0ZW1bXSBhcnJheTsgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXksIEkgbmVlZCBhXG53ZWF0aGVyLWl0ZW0gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIndlYXRoZXItbGlzdFwiPlxuICAgICAgICAgICAgPHdlYXRoZXItaXRlbSAqbmdGb3I9XCIjd2VhdGhlckl0ZW0gb2Ygd2VhdGhlckl0ZW1zXCIgW2l0ZW1dPVwid2VhdGhlckl0ZW1cIj48L3dlYXRoZXItaXRlbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1dlYXRoZXJJdGVtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBXZWF0aGVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIFVzZSBBbmd1bGFyMiBsaWZlY3ljbGUgaG9vayBhbmQgaW1wbGVtZW50IGludGVyZmFjZVxuICB3ZWF0aGVySXRlbXM6IFdlYXRoZXJJdGVtW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlKSB7fVxuXG4gIC8vIEltcGxlbWVudCBuZ09uSW5pdCBtZXRob2RcbiAgLy8gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHdlYXRoZXJsaXN0IGNvbXBvbmVudCBoYXMgYmVlbiBjb25zdHJ1Y3RlZFxuICAvLyBhbmQgaXMgaW5pdGlhbGl6ZWRcbiAgbmdPbkluaXQoKTogYW55e1xuICAgIHRoaXMud2VhdGhlckl0ZW1zID0gdGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlckl0ZW1zKCk7XG4gIH1cblxuICAvLyBNYWtlIGVxdWFsIHRvIFdFQVRIRVJfSVRFTVMgZXhwb3J0ZWQgYXJyYXlcbiAgLy8gd2VhdGhlckl0ZW1zOiBXZWF0aGVySXRlbVtdID0gV0VBVEhFUl9JVEVNUztcbn1cbiJdfQ==
