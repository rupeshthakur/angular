import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import {mainViewComponent} from "./views/main-view/main-view.component";
import {minorViewComponent} from "./views/minor-view/minor-view.component";
//import {registerComponent} from "./views/register/register.component";
import {blankComponent} from "./components/common/layouts/blank.component";
import {basicComponent} from "./components/common/layouts/basic.component";

import { DataResolver } from './app.resolver';
import {toolsViewComponent} from "./views/tools-view/tools-view.component";
//export const ROUTES: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'login', component: LoginFormComponent },
  //{ path: 'home', component: HomeComponent },
  //{ path: '**',    component: NoContentComponent },
  //{path: '', redirectTo: 'home', pathMatch: 'full'},
  //{path: 'home', component: mainViewComponent},
  //{path: 'minorView', component: minorViewComponent},
  //{path: 'login', component: LoginComponent },
  //{path: '**',    component: mainViewComponent }
//];
export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  // App views
  {
    path: '', component: basicComponent,
    children: [
      {path: 'home', component: mainViewComponent},
      {path: 'minorView', component: minorViewComponent},
      {path: 'toolsView', component: toolsViewComponent},
    ]
  },
  // Handle all other routes
  {path: '**',    component: mainViewComponent }
];

