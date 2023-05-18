import { Component } from '@angular/core';
import { canchas } from 'src/app/Modelo/canchas';
import { CanchaControllerService } from 'src/app/Services/Cancha/cancha-controller.service';
import { UserControllerService } from 'src/app/Services/usuario/user-controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canchas-forms',
  templateUrl: './canchas-forms.component.html',
  styleUrls: ['./canchas-forms.component.css']
})
export class CanchasFormsComponent {
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  canchas = ['Campin', 'Santiago Bernabeu', ' Ciudad Vinotinto', 'Buenos Aires'];

  model = new canchas(18, 'Nombre de la Cancha', 'Equipo 1', 5, 12);

  submitted = false;

  constructor(private canchaController: CanchaControllerService, private userControllerService: UserControllerService, private router: Router) {}

  onSubmit() {
    const fecha = '2023-05-18';
    const nombreCancha = 'Nombre de la cancha';
    const horaInicio = 8;
    const horaFin = 10;

    this.canchaController.crearCancha(fecha, nombreCancha, horaInicio, horaFin).subscribe(
      response => {
        // Procesar la respuesta aquí
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
        this.errorMessage = 'Error al crear cancha. Por favor, inténtelo nuevamente.';
      }
    );
  }

  newSubmit() {
    this.model = new canchas(42, 'Nombre de la Cancha', 'Equipo 1', 1, 2);
  }
}
