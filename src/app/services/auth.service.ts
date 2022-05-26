import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../environments/environment'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.baseUrl
  private email$: Subject<string>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
   
    this.email$ = new Subject();
  }


  signUp(user: any) {

    // console.log(user) //= {email: 'sddd@d.cl', password: '123456', passwordConfirm: '123456'}
    return this.http.post<any>(this.URL + '/api/auth/registro', user)
  }

  signIn(user: any) {

    this.email$.next(user);

    let headers = new HttpHeaders({
      'clicksignin': 'true'
    });

    let options = { headers: headers };

    return this.http.post<any>(this.URL + '/api/auth/ingreso', user, options)

  }

  getEmail$(): Observable<string> {
    return this.email$.asObservable();
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
