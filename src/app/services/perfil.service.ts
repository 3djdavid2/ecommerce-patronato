
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
  ) { }


  getCompras() {
    return this.http.get<any>(this.URL + '/api/compras')
  }

  getBadge() {
    return this.http.get<any>(this.URL + '/api/carrito')
  }

  updateProdIdCarrito(dataBody: any) {
    return this.http.put<any>(this.URL + `/api/carrito/`, dataBody)
  }

  deleteProdIdCarrito(id: number) {
    return this.http.delete<any>(this.URL + `/api/carrito/${id}`)
  }


  getCarrito() {
    return this.http.get<any>(this.URL + '/api/carrito')
  }

  createCarrito(productoId: number, producto: string, precio: number, cantidad: number, total: number) {

    return this.http.post<any>(this.URL + `/api/carrito`, { productoId, producto, precio, cantidad, total })

  }


  getMisDatos() {
    return this.http.get<any>(this.URL + '/api/perfil')
  }

  putMisDatos(dataBody: any) {
    return this.http.put<any>(this.URL + '/api/perfil', dataBody)
  }


}
