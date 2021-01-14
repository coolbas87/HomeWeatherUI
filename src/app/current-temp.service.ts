import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sensor } from './sensor';
import { catchError } from 'rxjs/operators';
import {environment} from '../environments/environment';

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

  getTemperatures(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.baseUrl + this.temperatureUrl)
      .pipe(catchError(this.handleError<Sensor[]>('getTemperatures', []))
      );
  }

  getTemperature(id: number): Observable<Sensor> {
    const url = `${this.baseUrl + this.temperatureUrl}/${id}`;
    return this.http.get<Sensor>(url).pipe(
      catchError(this.handleError<Sensor>(`getTemperature id=${id}`))
    );
  }
}
