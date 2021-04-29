import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//FONT-AWESOME
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// PAGES
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RequestsComponent } from './pages/requests/requests.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    HomeComponent,
    NavbarComponent,
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
