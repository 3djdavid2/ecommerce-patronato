
import { Injectable } from '@angular/core';
//
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private URL = environment.url

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signUp(user: any) {
    // console.log(user) //= {email: 'sddd@d.cl', password: '123456', passwordConfirm: '123456'}

    return this.http.post<any>(this.URL + '/api/auth/registro', user)

  }


  signIn(user: any) {
    
    let headers = new HttpHeaders({
      'clicksignin': 'true'
    });
    let options = { headers: headers };

    return this.http.post<any>(this.URL + '/api/auth/ingreso', user, options)

  }

  //Comprobar si existe un token
  loggedIn() {
    return !!window.localStorage.getItem('token');
  }

  getToken() {

    return window.localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
    // this.router.navigate(['/api/auth/ingreso'])
    // this.router.navigate(['/home'])
  }

}
