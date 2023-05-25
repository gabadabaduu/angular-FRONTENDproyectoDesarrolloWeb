import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { canchas } from 'src/app/Modelo/canchas';

@Injectable({
  providedIn: 'root'
})
export class CanchaControllerService {

  constructor(private http: HttpClient) { }

  getData(nombreCancha: string) {
    const url = `jdbc:mysql://66.70.137.253:3306/grupo1/Canchas`;
    return this.http.get(url);
  }

  crearCancha(fecha: string, nombreCancha: string, horaInicio: number, horaFin: number) {
    const url = `jdbc:mysql://66.70.137.253:3306/grupo1/Canchas`;
    const body = {
      fecha: fecha,
      nombreCancha: nombreCancha,
      horaInicio: horaInicio,
      horaFin: horaFin
    };
  
    return this.http.post(url, body);
  }
  

}
