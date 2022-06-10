
import { Injectable } from '@angular/core';
//importo el interceptor:
import {  HttpHandler, HttpInterceptor,HttpRequest } from '@angular/common/http'
//importo servicio para obtener getToken():
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {
  }
  
  intercept(req:HttpRequest<any>, next:HttpHandler) {
    
    const token= this.authService.verifyToken();
    
    const tokenizeReq = req.clone({
      
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  
    return next.handle(tokenizeReq);
  
  }

}
