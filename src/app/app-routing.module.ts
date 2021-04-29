import { SaleComponent } from './pages/sale/sale.component';
import { ExtractsComponent } from './pages/extracts/extracts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { RequestsComponent } from './pages/requests/requests.component';

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
    path: 'requests',
    component: RequestsComponent,
  },
  {
    path: 'extracts',
    component: ExtractsComponent,
  },
  {
    path: 'sale',
    component: SaleComponent,
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
