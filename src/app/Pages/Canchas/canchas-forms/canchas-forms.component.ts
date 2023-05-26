import { Component } from '@angular/core';
import { canchas } from 'src/app/Modelo/canchas';
import { CanchaControllerService } from 'src/app/Services/Cancha/cancha-controller.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-canchas-forms',
  templateUrl: './canchas-forms.component.html',
  styleUrls: ['./canchas-forms.component.css']
})
export class CanchasFormsComponent {
  model = new canchas(18, '', '', 0, 0);
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  nombre: string = '';
  hora_A: number = 0.0;
  hora_C: number = 0.0;
  fecha: string = '';
 
  submitted = false;

  constructor(private canchaController: CanchaControllerService, private router: Router, private http: HttpClient) {}
  

  onSubmit() {
    const canch= {
      nombreCancha: this.nombre,
      horaInicio: this.hora_A,
      horaFin: this.hora_C,
      fecha: this.fecha
    };


    const url = `http://localhost:8080/Canchas?nombre=${this.model.nombreCancha}&hora_a=${this.model.horaInicio}&hora_c=${this.model.horaFin}&fecha=${this.model.fecha}`;

    this.http.post(url, canch).subscribe(
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
        this.errorMessage = 'Error al crear la cancha. Por favor, inténtelo nuevamente.';
      }
    );
  }

  newSubmit() {
    this.model = new canchas(42, '', '', 0, 0);
  }
}
