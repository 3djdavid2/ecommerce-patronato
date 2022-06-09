
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

  getMisDatos(email: any, token: any) {
    let headers = new HttpHeaders({
      'token': token
    });
    let options = { headers: headers };
    return this.http.get<any>(this.URL + `/api/perfil/${email}`, options)
  }

  putMisDatos(email: any, dataBody: any) {

    return this.http.put<any>(this.URL + `/api/perfil/${email}`, dataBody)
  }


  createCarrito(email: any, productId: number, cant: number) {
    const ordenPedido = 'O-002'
    console.log("createCarrito en post", email, productId, cant, ordenPedido)
    return this.http.post<any>(this.URL + `/api/carrito`, { email, productId, cant, ordenPedido })

  }

}
