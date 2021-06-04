import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {PlayerStats} from "../models/playerStats";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private url = 'http://localhost:8080/stats/players'; // Fixme

  constructor(private http: HttpClient) {
  }

  getAllPlayerStats(): Observable<PlayerStats[]> {
    return this.http.get<PlayerStats[]>(this.url)
      .pipe(
        catchError(this.handleError<PlayerStats[]>('getAllPlayerStats', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
