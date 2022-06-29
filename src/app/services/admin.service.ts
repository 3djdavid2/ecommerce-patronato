import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private URL = environment.baseUrl
  constructor(
    
    private http: HttpClient,
    private router: Router
  ) {
  }

  transferencia(){
    
  }




}
