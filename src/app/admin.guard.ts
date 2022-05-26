import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  isAdmin:boolean;//todo //borrar despues esta prueba

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.isAdmin= true
   }

  canActivate(): any {

    if (this.authService.isloggedIn()) {
      if(this.isAdmin){
        //si esta logeado y es admin, puede ver la pagina de crud de prodeuctos
        return true;
      }
    }
    
    return false;
  }


}


