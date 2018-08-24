import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
      CoreModule,
      RouterModule.forChild([
        { path: 'login', component: LoginComponent, pathMatch: 'full' }
      ])
    ],
    declarations: [
      LoginComponent
    ],
    exports: [     
      LoginComponent   
    ],
    providers: [
      AuthService,
      AuthGuard
    ],
  })
  export class AuthModule { }