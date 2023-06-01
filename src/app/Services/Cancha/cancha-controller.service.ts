import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { canchas } from 'src/app/Modelo/canchas';

@Injectable({
  providedIn: 'root'
})
export class CanchaControllerService {

  constructor(private http: HttpClient) { }

  gettodaslascanchas() {
    return this.http.get(`http://localhost:8080/Canchas `);
  }

  getData(nombreCancha: string) {
    return this.http.get(`http://localhost:8080/Canchas/nombre_canchas/nombreCancha=${nombreCancha} `);
  }
  

  crearCancha(nombreCancha: string, horaInicio: number, horaFin: number, fecha: string,) {
    const url = 'http://localhost:8080/Canchas';
    const body = {
      fecha: fecha,
      nombreCancha: nombreCancha,
      horaInicio: horaInicio,
      horaFin: horaFin
    };
  
    return this.http.post(url, body);
  }
  

}
