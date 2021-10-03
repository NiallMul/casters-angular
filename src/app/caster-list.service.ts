import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {CasterSelection} from "./CasterSelection";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CasterListService {

  constructor(private http: HttpClient) {
  }

  private castersUrl = 'http://localhost:8080/casters';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getCasterList(): Observable<CasterSelection> {
    return this.http.get<CasterSelection>(this.castersUrl);
    // return this.http.get<CasterSelection>(this.castersUrl).pipe(
    //   tap(_ => console.log("Fetched casterlist")),
    //   catchError(this.handleError<CasterSelection>("getCasters"))
    // );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
