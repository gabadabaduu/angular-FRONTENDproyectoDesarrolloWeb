import { Injectable } from '@angular/core';
import { Usuario } from '../../Modelo/usuario';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private http: HttpClient) { }

  getData(fecha: string, horaInicio: number, horaFin: number, nombreUsuario: string, nombreCancha: string) {
    const url = `http://localhost:8080/Usuario?fecha=${fecha}&horai=${horaInicio}&horaf=${horaFin}&usuario=${nombreUsuario}&cancha=${nombreCancha}`;
    return this.http.get(url);
  }

  login(username: string, password: string) {
    const credentials = { username, password };
    return this.http.post('http://localhost:8080/Usuario', credentials);
  }
  
  
  crearUsuario(nombre: string, contraseña: string) {
    const url = `http://localhost:8080/Usuario/crearUsuario`;
    const body = {
      nombre: nombre,
      contraseña: contraseña
    };
  
    return this.http.post(url, body);
  }
  

  logOut() {
    return this.http.post('http://localhost:8080/Usuario', null);
  }
  
}
