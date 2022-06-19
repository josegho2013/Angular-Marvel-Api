import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreatorsService {
  constructor(private http: HttpClient) {}

  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      throw error;
    }
    return throwError(() => error);
  };

  getCreators(): Observable<any> {
    return this.http
      .get<any>(`${environment.URL_API}creators`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data creators: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }
  getCreatorsById(id: number): Observable<any> {
    console.log('Si entro: ', id);
    return this.http
      .get<any>(`${environment.URL_API}creators/${id}`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data getCreatorsById: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }
  getCreatorsIdComics(id: number): Observable<any> {
    return this.http
      .get<any>(`${environment.URL_API}creators/${id}/comics`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data getCreatorsIdComics: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }

  getCreatorsIdseries(id: number): Observable<any> {
    return this.http
      .get<any>(`${environment.URL_API}creators/${id}/series`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data  getCreatorsIdseries: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }





}
