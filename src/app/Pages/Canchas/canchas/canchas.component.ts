import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { canchas } from 'src/app/Modelo/canchas';
import { CanchaControllerService } from 'src/app/Services/Cancha/cancha-controller.service';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent {
  cancha: canchas[] = [];
  canchaSeleccionada!: canchas;
  nombreCancha: any;
  numeroIdentificacion: any;
  horaCierre: any;
  horaApertura: any;

  constructor(public canchaService: CanchaControllerService, private http: HttpClient) {
    canchaService.gettodaslascanchas().subscribe((data: any) => {
      this.cancha = data;
    });
  }


ngOnInit() {
  this.canchaService.getData(this.nombreCancha).subscribe(() => {
  });
}

  mostrarInformacionCancha() {
    if (this.canchaSeleccionada) {
      this.canchaService.getData(this.canchaSeleccionada.nombreCancha).subscribe((data: any) => {
        this.numeroIdentificacion = data.numeroIdentificacion;
        this.horaApertura = data.horaApertura;
        this.horaCierre = data.horaCierre;
      });
    } else {
      this.numeroIdentificacion = '';
      this.horaApertura = '';
      this.horaCierre = '';
    }
  }

  onSubmit() {
    const canch = {
      nombreCancha: this.canchaSeleccionada.nombreCancha,
      horaInicio: this.horaApertura,
      horaFin: this.horaCierre
    };

    const url = `http://localhost:8080/Canchas/nombre_canchas/nombre=${this.canchaSeleccionada.nombreCancha}`;

    this.http.post(url, canch).subscribe(
      response => {
        this.ngOnInit();
        console.log(response);
        // Actualizar la interfaz de usuario
        // Redirigir a otra página
      },
      error => {
        // Manejar el error aquí
        console.error(error);
      }
    );
  }
}
