import { Injectable } from '@angular/core';
import { Usuario } from '../../Modelo/usuario';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get('http://localhost:4200/')
  }


}
