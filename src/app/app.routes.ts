import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoggedinComponent } from './loggedin';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'loggedin', component: LoggedinComponent },
  { path: '**',    component: NoContentComponent },
];
