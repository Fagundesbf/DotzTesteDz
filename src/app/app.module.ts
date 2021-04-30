import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//FONT-AWESOME
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NgCircleProgressModule } from 'ng-circle-progress';


// PAGES
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ExtractsComponent } from './pages/extracts/extracts.component';
import { SaleComponent } from './pages/sale/sale.component';
import {IConfig, NgxMaskModule} from 'ngx-mask';

// export const options: Partial<IConfig> | (() => Partial<IConfig>);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    HomeComponent,
    NavbarComponent,
    RequestsComponent,
    ExtractsComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
