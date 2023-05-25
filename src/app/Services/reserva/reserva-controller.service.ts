import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { canchas } from 'src/app/Modelo/canchas';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ReservaControllerService {

  constructor(private http: HttpClient, private _sanitizer: DomSanitizer) { }
  getData(fecha: string, horaInicio: number, horaFin: number, nombreUsuario: string, nombreCancha: string) {
    const url = `jdbc:mysql://66.70.137.253:3306/grupo1`;
    return this.http.get(url);
  }
  
    reservarCancha(username: string, password: string, fecha: string, horaInicio: number, horaFin: number, nombreUsuario: string, nombreCancha: string) {
  const url = `jdbc:mysql://66.70.137.253:3306/grupo1`;
  const credentials = { username, password };

  return this.http.post(url, credentials);
}

cancelarReserva(username: string, password: string, fecha: string, horaInicio: number, horaFin: number, nombreUsuario: string, nombreCancha: string) {
  const url = `jdbc:mysql://66.70.137.253:3306/grupo1`;
  const credentials = { username, password };
  const body = { fecha, horaInicio, horaFin, nombreUsuario, nombreCancha };

  return this.http.post(url, { credentials, body });
}


}
