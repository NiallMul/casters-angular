import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private loginUrl = "http://localhost:8080/login";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  login(): void{

  }

}
