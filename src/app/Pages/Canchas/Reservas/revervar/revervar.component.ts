import { Component } from '@angular/core';
import { ReservaControllerService } from 'src/app/Services/reserva/reserva-controller.service';
import { UserControllerService } from 'src/app/Services/usuario/user-controller.service';
import { HttpClient } from '@angular/common/http';
import { reserva } from 'src/app/Modelo/reserva';
import { Router } from '@angular/router';
@Component({
  selector: 'app-revervar',
  templateUrl: './revervar.component.html',
  styleUrls: ['./revervar.component.css']
})
export class RevervarComponent {

submitted = false;

model = new reserva(18, 1, 2, 8 , 'fecha');

showSuccessMessage: boolean = false;
successMessage: string = 'reservación fue hecha sin problemas';
showErrorMessage: boolean = false;
errorMessage: string = 'ERROR: NO SE PUDO INGRESAR LA RESERVA';

constructor(private reservacontroller: ReservaControllerService, private userControllerService: UserControllerService, private http: HttpClient, private router: Router) {}

hora_A: number = 0.0;
hora_C: number = 0.0;
fecha: string = '';

onSubmit() { 
  this.submitted = true; 
  const reser= {
    hora_Inicio: this.hora_A,
    hora_final: this.hora_C,
    fecha: this.fecha
  };

  const url = `http://localhost:8080/Reserva?hora_inicio=${this.model.hora_inicio}&hora_final=${this.model.hora_final}&fecha_reserva=${this.model.fecha}`;

  this.http.post(url, reser).subscribe(
    response => {
      console.log(response);
      // Actualizar la interfaz de usuario
      this.showSuccessMessage = true;
      this.successMessage = 'Cancha creada con éxito';
      // Redirigir a otra página
      this.router.navigate(['/Canchas']);
    },
    error => {
      // Manejar el error aquí
      console.error(error);
      this.showErrorMessage = true;
      this.errorMessage = 'Error al crear la cancha. Por favor, inténtelo nuevamente.';
    }
  );

}

 // Agregamos la inyección de dependencia
  
newSubmit() {
  this.model = new reserva(0, 0, 0, 0, 'fecha');
}


}
