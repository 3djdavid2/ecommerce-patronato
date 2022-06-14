
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

getCarrito(){
  return this.http.get<any>(this.URL + '/api/carrito')

}

  getMisDatos() {

    return this.http.get<any>(this.URL + '/api/perfil')
  }

  putMisDatos(dataBody: any) {

    return this.http.put<any>(this.URL + '/api/perfil', dataBody)
  }

  createCarrito(productoId: number, producto: string, precio: number, cantidad: number, total: number) {

    return this.http.post<any>(this.URL + `/api/carrito`, { productoId, producto, precio, cantidad, total })

  }

}
