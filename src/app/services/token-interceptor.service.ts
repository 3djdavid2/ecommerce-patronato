
import { Injectable } from '@angular/core';
//importo el interceptor:
import {  HttpHandler, HttpInterceptor,HttpRequest } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

private tokenizeReq!:any;

  constructor(  ) {  }
  
  intercept(req:HttpRequest<any>, next:HttpHandler) {
    
      
      const token = window.localStorage.getItem('token')
     
      this.tokenizeReq = req.clone({
        
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    
  
    return next.handle(this.tokenizeReq);
  
  }

}
