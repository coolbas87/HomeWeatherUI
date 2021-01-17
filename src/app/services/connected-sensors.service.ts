import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ConnectedSensor} from '../interfaces/connected-sensor';
import {ConnectedSensorDetail} from '../interfaces/connected-sensor-detail';

@Injectable({
  providedIn: 'root'
})
export class ConnectedSensorsService {

  private connSensorsUrl = '/api/ConnectedSensors';
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  getConnectedSensors(): Observable<ConnectedSensor[]> {
    return this.http.get<ConnectedSensor[]>(this.baseUrl + this.connSensorsUrl)
      .pipe(catchError(this.handleError<ConnectedSensor[]>('getConnectedSensors', []))
      );
  }

  getConnectedSensor(id: number): Observable<ConnectedSensorDetail> {
    const url = `${this.baseUrl + this.connSensorsUrl}/${id}`;
    return this.http.get<ConnectedSensorDetail>(url).pipe(
      catchError(this.handleError<ConnectedSensorDetail>(`getConnectedSensor id=${id}`))
    );
  }
}
