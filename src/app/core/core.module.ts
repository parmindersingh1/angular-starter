import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './elements/layout';
import { TopNavigation2Component } from './elements/top-navigation-2';
import { TopNavigation1Component } from './elements/top-navigation-1';
import { RightSidebar1Component } from './elements/right-sidebar-1';
import { Navbar1Component } from './elements/navbar-1';
import { LeftSidebar1Component } from './elements/left-sidebar-1';
import { Jumbotron2Component } from './elements/jumbotron-2';
import { Jumbotron1Component } from './elements/jumbotron-1';
import { ErrorPageComponent } from './pages/error-page';
import { EmptyPageComponent } from './pages/empty-page';
import { BackdropsComponent } from './elements/backdrops';
import { AppComponent } from './../app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [      
      BrowserModule,
      ReactiveFormsModule,
      HttpModule,
      CommonModule,
      FormsModule,
      RouterModule
    ],
    declarations: [
      AppComponent,
      BackdropsComponent,
      EmptyPageComponent,
      ErrorPageComponent,
      Jumbotron1Component,
      Jumbotron2Component,
      LeftSidebar1Component,
      Navbar1Component,
      RightSidebar1Component,
      TopNavigation1Component,
      TopNavigation2Component,
      LayoutComponent
    ],
    exports: [     
      AppComponent,
      BackdropsComponent,
      EmptyPageComponent,
      ErrorPageComponent,
      Jumbotron1Component,
      Jumbotron2Component,
      LeftSidebar1Component,
      Navbar1Component,
      RightSidebar1Component,
      TopNavigation1Component,
      TopNavigation2Component,
      LayoutComponent
    ],
    providers: [],
  })
  export class CoreModule { }