import { AdminModule } from './admin/admin.module';
import { LayoutComponent } from './core/elements/layout';
import { AuthGuard } from './auth/services/auth-guard.service';
import { LoginComponent } from './auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { EmptyPageComponent } from './core/pages/empty-page';
import { ErrorPageComponent } from './core/pages/error-page';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CoreModule,
    AuthModule,
    AdminModule,
    RouterModule.forRoot([            
      { path: '**', component: ErrorPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
