
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
// import { Observable } from 'rxjs';//descativo esta linea de rxjs e
//importo:
import { AuthService } from './services/auth.service';
//
//importo en router
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //creo el constructor:
  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  canActivate(): any {
    if(this.authService.loggedIn()){
      return true;
    }
    this.router.navigate(['/ingreso'])
    return false;
  }


}