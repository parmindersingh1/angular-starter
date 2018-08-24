import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../../../../styles/pages/login.scss','./login.component.css']
})
export class LoginComponent{

  constructor(private auth: AuthService, private router: Router) {  }

  login() {
    this.auth.login();
    this.router.navigate(['']);
  }

}