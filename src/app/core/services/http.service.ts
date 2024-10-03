import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorHandlerService } from './errorHandler.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly baseUrl : string = 'http://localhost:8080/api/v1'

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  get<T>(endpoint: string, options?: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { observe: 'body', ...options }).pipe(
      catchError((error: HttpErrorResponse) => this.errorHandler.handleError(error))
    ) as Observable<T>;
  }

  post<T>(endpoint: string, body: any, options?: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, { observe: 'body', ...options }).pipe(
      catchError((error: HttpErrorResponse) => this.errorHandler.handleError(error))
    ) as Observable<T>;
  }

  put<T>(endpoint: string, body: any, options?: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body, { observe: 'body', ...options }).pipe(
      catchError((error: HttpErrorResponse) => this.errorHandler.handleError(error))
    ) as Observable<T>;
  }

  delete<T>(endpoint: string, options?: any): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, { observe: 'body', ...options }).pipe(
      catchError((error: HttpErrorResponse) => this.errorHandler.handleError(error))
    ) as Observable<T>;
  }
}
