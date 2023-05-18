import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { canchas } from 'src/app/Modelo/canchas';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ReservaControllerService {

  constructor(private http: HttpClient, private _sanitizer: DomSanitizer) { 
  }  
  getData(fecha: string, horaInicio: number, horaFin: number, nombreUsuario: string, nombreCancha: string) {
    const url = `http://localhost:8080/Reserva?fecha=${fecha}&horai=${horaInicio}&horaf=${horaFin}&usuario=${nombreUsuario}&cancha=${nombreCancha}`;
    return this.http.get(url);
  }
  
    reservarCancha(username: string, password: string, fecha: string, horaInicio: number, horaFin: number, nombreUsuario: string, nombreCancha: string) {
  const url = `http://localhost:8080/Reserva?fecha=${fecha}&horai=${horaInicio}&horaf=${horaFin}&usuario=${nombreUsuario}&cancha=${nombreCancha}`;
  const credentials = { username, password };

  return this.http.post(url, credentials);
}

cancelarReserva(username: string, password: string, fecha: string, horaInicio: number, horaFin: number, nombreUsuario: string, nombreCancha: string) {
  const url = `http://localhost:8080/Reserva`;
  const credentials = { username, password };
  const body = { fecha, horaInicio, horaFin, nombreUsuario, nombreCancha };

  return this.http.post(url, { credentials, body });
}


}
