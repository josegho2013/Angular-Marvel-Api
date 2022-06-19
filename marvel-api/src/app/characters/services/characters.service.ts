import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      throw error;
    }
    return throwError(() => error);
  };

  getCharacters(): Observable<any> {
    return this.http
      .get<any>(`${environment.URL_API}characters`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }

  getCharactersById(id: number): Observable<any> {
    console.log('Si entro: ', id);
    return this.http
      .get<any>(`${environment.URL_API}characters/${id}`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data getCharactersById: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }

  getCharacterIdComics(id: number): Observable<any> {
    return this.http
      .get<any>(`${environment.URL_API}characters/${id}/comics`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data getCharacterIdComics: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }

  getCharacterIdSeries(id: number): Observable<any> {
    return this.http
      .get<any>(`${environment.URL_API}characters/${id}/series`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH,
        },
      })
      .pipe(
        map((data: any) => {
          console.log('Data getCharacterIdSeries: ', data.data.results);
          return data.data.results;
        }),
        catchError(this.handleError)
      );
  }
}
