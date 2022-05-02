import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
  }

  private loginUrl = "http://63.32.136.243:8080/user/login";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  async login(user: User) {
    debugger;
    let loginResponse = await this.http.post<User>(this.loginUrl, user).toPromise()
    return loginResponse;
  }

}
