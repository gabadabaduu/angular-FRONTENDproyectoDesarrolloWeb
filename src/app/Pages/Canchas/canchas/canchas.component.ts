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
  models: canchas[] = []; 
  

  constructor(public canchaService: CanchaControllerService, private http: HttpClient) {
    canchaService.gettodaslascanchas().subscribe((data: any) => {
      this.cancha = data;
    });
    this.models.push(this.model1);
    this.models.push(this.model2);
    this.models.push(this.model3);
    this.models.push(this.model4);
    this.models.push(this.model5);
    this.models.push(this.model6);
    this.models.push(this.model7);
    this.models.push(this.model8);
    this.models.push(this.model9);
    this.models.push(this.model10);
    this.models.push(this.model11);
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
































































































model5 = new canchas(19,'01/05/2012','Barcelona',5,18);
model6 = new canchas(11,'01/05/2002','RealMadrid',6,14);
model1 = new canchas(10,'23/12/1990','prueba',3,4);
model7 = new canchas(7,'01/05/2002','gg',20,24);
model2 = new canchas(8,'01/05/2022','Re',16,24);
model3 = new canchas(32,'02/25/2080','hola',8,14);
model4 = new canchas(51,'11/14/2044','Colombia',7,13);
model8 = new canchas(52,'01/20/1890','bogota',6,14);
model9 = new canchas(53,'05/30/2078','YY',6,14);
model10 = new canchas(54,'01/08/2020','ORLANDO',6,14);
model11 = new canchas(55,'01/12/2017','RealMadrid',6,14);
}