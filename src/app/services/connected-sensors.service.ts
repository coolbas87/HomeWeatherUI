import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ConnectedSensorModel} from '../interfaces/connected-sensor.model';
import {ConnectedSensorDetailModel} from '../interfaces/connected-sensor-detail.model';

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

  getConnectedSensors(): Observable<ConnectedSensorModel[]> {
    return this.http.get<ConnectedSensorModel[]>(this.baseUrl + this.connSensorsUrl)
      .pipe(catchError(this.handleError<ConnectedSensorModel[]>('getConnectedSensors', []))
      );
  }

  getConnectedSensor(id: number): Observable<ConnectedSensorDetailModel> {
    const url = `${this.baseUrl + this.connSensorsUrl}/${id}`;
    return this.http.get<ConnectedSensorDetailModel>(url).pipe(
      catchError(this.handleError<ConnectedSensorDetailModel>(`getConnectedSensor id=${id}`))
    );
  }
}
