import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {TempHistoryItem} from '../interfaces/temp-history-item';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TempHistoryService {

  private historyUrl = '/api/TempHistory';
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private datepipe: DatePipe) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  getTempHistory(from: Date, to: Date): Observable<TempHistoryItem[]> {
    const url = `${this.baseUrl + this.historyUrl}/${from}/${to}`;
    return this.http.get<TempHistoryItem[]>(url).pipe(
      catchError(this.handleError<TempHistoryItem[]>(`getTempHistory from=${from} to=${to}`))
    );
  }

  getTempHistoryByID(id: number, from: Date, to: Date): Observable<TempHistoryItem[]> {
    const url = `${this.baseUrl + this.historyUrl}/${id}/${from}/${to}`;
    return this.http.get<TempHistoryItem[]>(url).pipe(
      catchError(this.handleError<TempHistoryItem[]>(`getTempHistoryByID id=${id} from=${from} to=${to}`))
    );
  }
}
