

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  data: any;
 

  private URL = environment.baseUrl
 
  constructor(
    private http: HttpClient
  ) {

  }

  getMisDatos(email:any){
  
    return this.http.get<any>(this.URL + `/api/perfil/${email}`)
  }



  putMisDatos(email:any, dataBody:any) {
   
    return this.http.put<any>(this.URL + `/api/perfil/${email}`, dataBody)
  }
}
