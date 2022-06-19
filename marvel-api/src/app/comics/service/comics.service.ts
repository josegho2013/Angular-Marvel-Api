import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  constructor(private http: HttpClient) {}

  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      throw error;
    }
    return throwError(() => error);
  };

  getComics(): Observable<any> {
    return this.http
      .get<any>(`${environment.URL_API}comics`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data comics: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }
  getComicsById(id: number): Observable<any> {
    console.log('Si entro: ', id);
    return this.http
      .get<any>(`${environment.URL_API}comics/${id}`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data getComicsById: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }
  getComicsIdCharacter(id: number): Observable<any> {
    return this.http
      .get<any>(`${environment.URL_API}comics/${id}/characters`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data getComicsIdCharacter: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }

  getComicsIdCreators(id: number): Observable<any> {
    return this.http
      .get<any>(`${environment.URL_API}comics/${id}/creators`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data getComicsIdcreators: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }


}
