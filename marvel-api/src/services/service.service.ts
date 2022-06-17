import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  PUBLIC_KEY = '55a7f9bcaff2a14a6ea94afcda366b0';
  HASH = 'ee7c45d96106b07e42c7dd307d061af521300c87755a7f9bcaff2a14a6ea94afcda366b0';
  URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.result))
  }
}






 