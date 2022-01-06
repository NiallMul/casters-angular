import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {CasterSelection} from "./CasterSelection";
import {User} from "./User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private loginUrl = "http://localhost:8080/login";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  async login(user: User) {
    return await this.http.post<User>(this.loginUrl, user).toPromise();
  }

}
