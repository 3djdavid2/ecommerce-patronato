
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getMisDatos() {
 
    return this.http.get<any>(this.URL + '/api/perfil')
  }

  putMisDatos(email: any, dataBody: any) {

    return this.http.put<any>(this.URL + '/api/perfil' , dataBody)
  }


  createCarrito(email: any, productId: number, cant: number) {
    
    return this.http.post<any>(this.URL + `/api/carrito`, {productId, cant })

  }

}
