import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductosCrudComponent } from './components/productos-crud/productos-crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from './auth.guard'
import { TokenInterceptorService } from './services/token-interceptor.service'

import { MaterialModule } from './material.module'
//clase 64:
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core'
//--

import { ButtonModule } from '@app/shared/buttons';

import { HeaderComponent } from './components/header/header.component';

//clase72 pop ups
import { NotificationModule } from './services';
import { MenuListComponent } from './components/menu-list/menu-list.component'

//clase 261


import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AutoFocusInputDirective } from './directivas/auto-focus-input.directive';




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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CarritoComponent,
    ProductosCrudComponent,
    HeaderComponent,
    MenuListComponent,
    HomeComponent,
    ContactoComponent,
    AutoFocusInputDirective,    
  ],
  imports: [
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
   
   
  ],
  providers: [
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
