import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {PlayerStats} from "../models/playerStats";
import {catchError} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) {
  }

  getAllPlayerStats(): Observable<PlayerStats[]> {
    return this.http.get<PlayerStats[]>(`${environment.apiUrl}/stats/players`)
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
