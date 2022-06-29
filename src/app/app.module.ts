import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { CarritoComponent } from './components/carrito/carrito.component';

import { AuthGuard } from '../app/guards/auth/auth.guard'
import { TokenInterceptorService } from './services/token-interceptor.service'

//clase 64:
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core'
//--
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginationService } from './services/matpaginationtranslate.service';

import { ButtonModule } from '@app/shared/buttons';

import { HeaderComponent } from './components/header/header.component';

//clase72 pop ups
import { NotificationModule } from './services';
import { MenuListComponent } from './components/menu-list/menu-list.component'

//clase 261


import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AutoFocusInputDirective } from './directivas/auto-focus-input.directive';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';

//https://www.youtube.com/watch?v=vTtcuIZIvAA Canal de kevin Davila
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { EnvioComponent } from './components/carrito/envio/envio.component';
import { PagoComponent } from './components/carrito/pago/pago.component'; // npm i --save @auth0/angular-jwt
//


const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' },
  },
  display: {
    dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
  }
};

registerLocaleData(localeEs)
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CarritoComponent,
    HeaderComponent,
    MenuListComponent,
    HomeComponent,
    ContactoComponent,
    SucursalesComponent,
    AutoFocusInputDirective,
    EnvioComponent,
    PagoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ButtonModule,
    HttpClientModule,
    NotificationModule.forRoot(),
    MatNativeDateModule,
    MatPaginatorModule,
   

  ],


  providers: [
    {
      provide: MatPaginatorIntl, useClass: MatPaginationService
    },
    {
      provide: LOCALE_ID, useValue: 'es-ES'
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
