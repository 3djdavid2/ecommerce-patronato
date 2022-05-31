import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../environments/environment'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.baseUrl

  emailSource = new BehaviorSubject(null);
  email$ = this.emailSource.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {


  }


  signUp(user: any) {
    // console.log(user) //= {email: 'sddd@d.cl', password: '123456', passwordConfirm: '123456'}
    return this.http.post<any>(this.URL + '/api/auth/registro', user)
  }

  signIn(user: any) {

    this.emailSource.next(user)

    let headers = new HttpHeaders({
      'clicksignin': 'true'
    });
    let options = { headers: headers };

    return this.http.post<any>(this.URL + '/api/auth/ingreso', user, options)

  }



  //Comprobar si existe un token
  isloggedIn() {
    return !!window.localStorage.getItem('token');
  }

  getToken() {
    return window.localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home'])
  }

}
