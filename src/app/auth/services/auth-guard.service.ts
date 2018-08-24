import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
     console.log("cheking...")
     if(!this.auth.isAuthenticated())
        this.router.navigate(['/login']);
     return this.auth.isAuthenticated(); 

  }

}