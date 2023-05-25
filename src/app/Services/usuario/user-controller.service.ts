import { Injectable } from '@angular/core';
import { Usuario } from '../../Modelo/usuario';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private http: HttpClient) { }

  getData(fecha: string, horaInicio: number, horaFin: number, nombreUsuario: string, nombreCancha: string) {
    const url = `jdbc:mysql://66.70.137.253:3306/grupo1`;
    return this.http.get(url);
  }

  login(username: string, password: string) {
    const credentials = { username, password };
    return this.http.post(`jdbc:mysql://66.70.137.253:3306/grupo1`, credentials);
  }
  
  
  crearUsuario(nombre: string, contraseña: string) {
    const url = `jdbc:mysql://66.70.137.253:3306/grupo1`;
    const body = {
      nombre: nombre,
      contraseña: contraseña
    };
  
    return this.http.post(url, body);
  }
  

  logOut() {
    return this.http.post(`jdbc:mysql://66.70.137.253:3306/grupo1`, null);
  }
  
}
