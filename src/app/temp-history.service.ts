import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Sensor} from './sensor';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TempHistoryService {

  private historyUrl = '/api/TempHistory/';
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  getTemperatures(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.baseUrl + this.historyUrl)
      .pipe(catchError(this.handleError<Sensor[]>('getTemperatures', []))
      );
  }

  getTemperature(id: number): Observable<Sensor> {
    const url = `${this.baseUrl + this.historyUrl}/${id}`;
    return this.http.get<Sensor>(url).pipe(
      catchError(this.handleError<Sensor>(`getTemperature id=${id}`))
    );
  }
}
