import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TvmazeQueryResult } from '../types/tvmaze-results';

@Injectable({ providedIn: 'root' })
export class TvmazeService {
  svcUrl = 'http://api.tvmaze.com/search/shows';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  httpError(error: any) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

  searchShows(term: string): Observable<TvmazeQueryResult[]> {
    term = term.trim();
    const reqUrl = `${this.svcUrl}?q=${term}`;

    return this.httpClient
      .get<TvmazeQueryResult[]>(reqUrl)
      .pipe(retry(1), catchError(this.httpError));
  }
}
