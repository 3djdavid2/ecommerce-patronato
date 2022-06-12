import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { map, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetsService {

  data: any;
  private enviarData = new Subject<any>();
  enviarDataObservable = this.enviarData.asObservable();

  private URL = environment.baseUrl

  constructor(
    private http: HttpClient
  ) {

  }

  getProducto(id:number){
    return this.http.get<any>(this.URL + `/api/Product/${id}`)
  }

  getAllCount() {
    return this.http.get<any>(this.URL + `/api/Product/count`)
  }

  //obtener todos los productos y muestra por pagina
  getAllByPage(pageIndex: number, pageSize: number) {

   let resp= this.http.get<any>(this.URL + `/api/Product?pageIndex=${pageIndex}&pageSize=${pageSize}`)
        
   return resp

   
  }

  getMarcas() {
    return this.http.get<any>(this.URL + `/api/marca`)
  }

  getCategorias() {
    return this.http.get<any>(this.URL + `/api/categoria`)
  }
}
