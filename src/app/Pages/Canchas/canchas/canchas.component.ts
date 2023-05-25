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
  numeroIdentificacion: any;
  horaCierre: any;
  horaApertura: any;


  model = new canchas(18, 'fecha', 'nombre de cancha', 7, 15);

  constructor(private canchaService: CanchaControllerService) {
    canchaService.getData('Nombre de cancha').forEach((data: any) => {
      this.cancha = data;
    })
  }

    mostrarInformacionCancha() {
      if (this.canchaSeleccionada) {
        this.numeroIdentificacion = this.canchaSeleccionada.id;
        this.horaApertura = this.canchaSeleccionada.horaInicio;
        this.horaCierre = this.canchaSeleccionada.horaFin;
      } else {
        // Limpiar la información si no hay ninguna cancha seleccionada
        this.numeroIdentificacion = '';
        this.horaApertura = '';
        this.horaCierre = '';
      }
    }
    

   }


 

  