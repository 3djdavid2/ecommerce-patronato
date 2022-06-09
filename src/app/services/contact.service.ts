import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../src/environments/environment';

export interface Contacto{
  nombre: String,
  telefono: String,
  email: String,
  mensaje:String
}
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URI = environment.baseUrl

  constructor(private http: HttpClient) { }

  sendMessage({nombre, telefono, email, mensaje}:Contacto){
    const bodyRequest = {nombre, telefono, email, mensaje}        
    return this.http.post<any>(this.URI + '/api/send-email', bodyRequest);
  }
}