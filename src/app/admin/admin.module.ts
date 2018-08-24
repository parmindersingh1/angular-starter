import { EmptyPageComponent } from './../core/pages/empty-page';
import { AuthGuard } from './../auth/services/auth-guard.service';
import { LayoutComponent } from './../core/elements/layout';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { CoreModule } from './../core/core.module';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [
      CoreModule,
      RouterModule.forChild([        
        { path: '', component: LayoutComponent,  canActivate: [AuthGuard], children: [
          { path: '', component: DashboardComponent, pathMatch: 'full'},
          { path: 'pages/empty-page', component: EmptyPageComponent },
        ]},
      ])
    ],
    declarations: [
      DashboardComponent
    ],
    providers: [
    ],
  })
  export class AdminModule { }