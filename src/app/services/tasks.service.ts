
import { Injectable } from '@angular/core';
//
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

    private URL = environment.baseUrl

  constructor(private http: HttpClient) { }


  getClientes(){
    return this.http.get<any>(this.URL + '/clientes')
  }
  getProductos(){
    return this.http.get<any>(this.URL + '/api/productos')
  }
}