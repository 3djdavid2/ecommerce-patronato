import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../environments/environment'
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.baseUrl

  emailSource = new BehaviorSubject(null);
  email$ = this.emailSource.asObservable();

  constructor(
    private jwtHelper: JwtHelperService,
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


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home'])
  }

  verifyToken(): any {

    const token:any = window.localStorage.getItem('token')

    if (this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')) {
      return false;
    }
    return true;

  
  }
}
