import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {WeatherForecastModel} from '../interfaces/weather-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  private weatherForecastUrl = '/api/WeatherForecast';
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  getWeatherForecast(): Observable<WeatherForecastModel> {
    return this.http.get<WeatherForecastModel>(this.baseUrl + this.weatherForecastUrl)
      .pipe(catchError(this.handleError<WeatherForecastModel>('getWeatherForecast', null))
      );
  }
}
