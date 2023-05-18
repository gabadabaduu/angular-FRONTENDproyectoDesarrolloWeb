import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { canchas } from 'src/app/Modelo/canchas';

@Injectable({
  providedIn: 'root'
})
export class CanchaControllerService {

  constructor(private http: HttpClient) { }

  getData(fecha: string, horaInicio: number, horaFin: number, nombreUsuario: string, nombreCancha: string) {
    const url = `http://localhost:8080/Canchas?fecha=${fecha}&horai=${horaInicio}&horaf=${horaFin}&usuario=${nombreUsuario}&cancha=${nombreCancha}`;
    return this.http.get(url);
  }

  crearCancha(fecha: string, nombreCancha: string, horaInicio: number, horaFin: number) {
    const url = `http://localhost:8080/Canchas`;
    const body = {
      fecha: fecha,
      nombreCancha: nombreCancha,
      horaInicio: horaInicio,
      horaFin: horaFin
    };
  
    return this.http.post(url, body);
  }
  

}
