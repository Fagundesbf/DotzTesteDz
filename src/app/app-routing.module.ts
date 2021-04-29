import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
