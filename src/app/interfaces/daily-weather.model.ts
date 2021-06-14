import {WeatherConditionModel} from './weather-condition.model';

export interface DailyWeatherModel {
  date: Date;
  sunriseDate: Date;
  sunsetDate: Date;
  weatherCondition: WeatherConditionModel;
  tempMin: number;
  tempMax: number;
  pressure: number;
  humidity: number;
  dewPoint: number;
  windSpeed: number;
  windDegrees: number;
  windGust: number;
  cloudinessPerc: number;
  precipPercProbability: number;
  uvi: number;
  rainVol: number;
  snowVol: number;
}
