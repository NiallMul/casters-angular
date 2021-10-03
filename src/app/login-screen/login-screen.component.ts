import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
  }

  login = (name: string, password: string) => {
    this.router.navigateByUrl('/casterlist');

  }
}
