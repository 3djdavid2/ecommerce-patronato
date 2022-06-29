import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../environments/environment'
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.baseUrl

  emailSource = new BehaviorSubject(null);
  email$ = this.emailSource.asObservable();

  roleSource = new BehaviorSubject(null);
  role$ = this.roleSource.asObservable();
  
  badgeCarritoSource = new BehaviorSubject(null);
  badgeCarrito$ = this.badgeCarritoSource.asObservable();

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

    this.emailSource.next(user.email)
    this.badgeCarritoSource.next(null)

    let headers = new HttpHeaders({
      'clicksignin': 'true'
    });
    let options = { headers: headers };

    return this.http.post<any>(this.URL + '/api/auth/ingreso', user, options)

  }




  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    this.badgeCarritoSource.next(null)
    
  }

  roleToken(token:any):Observable<any>{    
    const roleId = jwtDecode(token as string) as any;
    this.roleSource.next(roleId.role)
    return roleId
  }

  verifyToken(): any {

    const token:any = window.localStorage.getItem('token')

    if (this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')) {
      return false;
    }
    return true;  
  }


}
