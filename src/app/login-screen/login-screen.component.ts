import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {User} from "../User";

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  user: User = {username:"", password:"",accountLocked:true};

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login = async (name: string, password: string) => {
    this.user.username = name;
    this.user.password = password;

    console.log(`username: ${this.user.username}`)
    debugger
    await this.loginService.login(this.user).then(user => this.user = user);

    if (!this.user.accountLocked) {
      console.log(`success`)
      this.router.navigateByUrl('/casterlist');
    } else {
      window.alert("Your account has been locked");
    }
  }
}
