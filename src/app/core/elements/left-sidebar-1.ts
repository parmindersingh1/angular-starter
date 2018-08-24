import { Router } from '@angular/router';
import { AuthService } from './../../auth/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'left-sidebar-1',
  templateUrl: '../elements/left-sidebar-1.html'
})

export class LeftSidebar1Component {

  constructor(private auth: AuthService, private router: Router) {
  }

  logout() {
    this.auth.logout();
    this.router.navigate['login'];
  }

}
