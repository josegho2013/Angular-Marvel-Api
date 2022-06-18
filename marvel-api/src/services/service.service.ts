import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  PUBLIC_KEY = '755a7f9bcaff2a14a6ea94afcda366b0';
  HASH = 'a0025515cbdcbf8a3694176e3bcdc57d';
  URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
 
  constructor(private http: HttpClient) { }
  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {      
      throw error;
    }
    return throwError(() => error);
  };
  getCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => {
          console.log("Data: ", data.data.results)
          return data.data.results
        }), 
        catchError(this.handleError)
      )
  }
}







 