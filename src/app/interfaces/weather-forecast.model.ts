import {DailyWeatherModel} from './daily-weather.model';
import {CurrentWeatherModel} from './current-weather.model';

export interface WeatherForecastModel {
  name: string;
  current: CurrentWeatherModel;
  daily: DailyWeatherModel[];
}
