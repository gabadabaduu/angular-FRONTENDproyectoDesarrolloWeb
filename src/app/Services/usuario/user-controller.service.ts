import { Injectable } from '@angular/core';
import { Usuario } from '../../Modelo/usuario';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get('http://localhost:8080/Reserva?fecha=02/10/22&horai=7&horaf=23&usuario=Reservas1&cancha=C3')
  }

  login(username: string, password: string) {
    const credentials = { username, password };
    return this.http.post('http://localhost:8080/Reserva?fecha=02/10/22&horai=7&horaf=23&usuario=Reservas1&cancha=C3', credentials);
  }
  
  crearUsuario(username: string, password: string) {
    const nuevoUsuario = { username, password };
    return this.http.post('http://localhost:8080/Reserva?fecha=02/10/22&horai=7&horaf=23&usuario=Reservas1&cancha=C3', nuevoUsuario);
  }
  
  logOut()
  {
    return this.http.post('http://localhost:8080/Reserva?fecha=02/10/22&horai=7&horaf=23&usuario=Reservas1&cancha=C3', null);
  }
}
