import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../services/weather-forecast.service';
import {WeatherForecastModel} from '../interfaces/weather-forecast.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  readonly gaugeCoefficient = 100 / 14;
  public forecast: WeatherForecastModel;
  public canvasWidth = 150;
  public needleValue = 29;
  public centralLabel = '';
  public name = '';
  public bottomLabel = '';
  public arrowClass = 'fas fa-long-arrow-alt-up';
  public rotateArrowStyle = '';
  public weatherImageSrc = '';
  public options = {
    hasNeedle: true,
    needleColor: 'black',
    arcOverEffect: false,
    arcLabels: ['2', '5', '7', '10', ''],
    needleUpdateSpeed: 500,
    arcColors: ['rgb(62,167,45)', 'rgb(255,243,0)', 'rgb(241,139,19)', 'rgb(229,50,16)', 'rgb(181,103,164)'],
    arcDelimiters: [15, 36, 50, 72],
    rangeLabel: ['0', '11+'],
    needleStartValue: 0,
    arcLabelFontSize: 11
  };

  constructor(private weatherForecastService: WeatherForecastService) { }

  ngOnInit(): void {
    this.weatherForecastService.getWeatherForecast().subscribe(
      data => {
        this.forecast = data;
        this.needleValue = Math.round(data.current.uvi * this.gaugeCoefficient);
        this.centralLabel = data.current.uvi.toString();
        this.rotateArrowStyle = `transform: rotate(${data.current.windDegrees}deg);`;
        this.weatherImageSrc = `assets/images/weather-conditions/${data.current.weatherCondition.iconName}.png`;
      });
  }
}
