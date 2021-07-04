import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SensorModel } from '../interfaces/sensor.model';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentTempService {

  private temperatureUrl = '/api/Temperature';
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  getTemperatures(): Observable<SensorModel[]> {
    return this.http.get<SensorModel[]>(this.baseUrl + this.temperatureUrl)
      .pipe(catchError(this.handleError<SensorModel[]>('getTemperatures', []))
      );
  }

  getTemperature(id: number): Observable<SensorModel> {
    const url = `${this.baseUrl + this.temperatureUrl}/${id}`;
    return this.http.get<SensorModel>(url).pipe(
      catchError(this.handleError<SensorModel>(`getTemperature id=${id}`))
    );
  }
}
