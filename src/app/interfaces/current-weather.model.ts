import {WeatherConditionModel} from './weather-condition.model';

export interface CurrentWeatherModel {
  date: Date;
  sunriseDate: Date;
  sunsetDate: Date;
  weatherCondition: WeatherConditionModel;
  temp: number;
  tempFeelsLike: number;
  pressure: number;
  humidity: number;
  dewPoint: number;
  uvi: number;
  cloudinessPerc: number;
  visibility: number;
  windSpeed: number;
  windDegrees: number;
  windGust: number;
  rainVolLast1Hour: number;
  snowVolLast1Hour: number;
}
