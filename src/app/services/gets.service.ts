import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Subject } from 'rxjs';


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

  getAllCount() {
    return this.http.get<any>(this.URL + `/api/Product/count`)
  }

  getAllByPage(pageIndex: number, pageSize: number) {
    return this.http.get<any>(this.URL + `/api/Product?pageIndex=${pageIndex}&pageSize=${pageSize}`)
  }

  getMarcas() {
    return this.http.get<any>(this.URL + `/api/marca`)
  }

  getCategorias() {
    return this.http.get<any>(this.URL + `/api/categoria`)
  }
}
