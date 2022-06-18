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
    return this.http.get<any>(`${environment.URL_API}characters`, {params: {ts: 1, apikey: environment.PUBLIC_KEY, hash: environment.HASH}}).pipe(
      map((data: any) => {
        console.log('Data: ', data.data.results);
        return data.data.results;
      }),
      catchError(this.handleError)
    );
  }
}
