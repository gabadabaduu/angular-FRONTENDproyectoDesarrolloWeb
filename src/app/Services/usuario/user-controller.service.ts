import { Injectable } from '@angular/core';
import { Usuario } from '../../Modelo/usuario';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private http: HttpClient) { }

  getData(fecha: string, horaInicio: number, horaFin: number, nombreUsuario: string, nombreCancha: string) {
    const url = `http://localhost:8080/Reserva?fecha=${fecha}&horai=${horaInicio}&horaf=${horaFin}&usuario=${nombreUsuario}&cancha=${nombreCancha}`;
    return this.http.get(url);
  }

  login(username: string, password: string) {
    const credentials = { username, password };
    return this.http.post('http://localhost:8080/Reserva', credentials);
  }
  
  
  crearUsuario(username: string, password: string) {
    const nuevoUsuario = { username, password };
    return this.http.post('http://localhost:8080/Reserva/crearUsuario', nuevoUsuario);
  }
  
  
  logOut() {
    return this.http.post('http://localhost:8080/Reserva/logout', null);
  }
  
}
