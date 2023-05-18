import { Component } from '@angular/core';
import { canchas } from 'src/app/Modelo/canchas';
import { ReservaControllerService } from 'src/app/Services/reserva/reserva-controller.service';
import { UserControllerService } from 'src/app/Services/usuario/user-controller.service';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-revervar',
  templateUrl: './revervar.component.html',
  styleUrls: ['./revervar.component.css']
})
export class RevervarComponent {
  cancha = ['Real Madrid', 'Barcelona', 'La Vinotinto', 'Millos'];

model = new canchas(18, 'Fecha', 'Nombre de la Cancha', 8 , 18);

submitted = false;

onSubmit() { this.submitted = true; }


constructor(private reservacontroller: ReservaControllerService, private userControllerService: UserControllerService, private http: HttpClient) {} // Agregamos la inyección de dependencia
  
newSubmit() {
  this.model = new canchas(42, 'Fecha', 'Nombre de Cancha', 8, 18);

  const username = 'miusuario';
  const password = 'micontraseña';
  const fecha = '02/10/22';
  const horaInicio = 7;
  const horaFin = 23;
  const nombreUsuario = 'Reservas1';
  const nombreCancha = 'C3';

  this.reservacontroller.reservarCancha(username, password, fecha, horaInicio, horaFin, nombreUsuario, nombreCancha).subscribe(response => {
    const url = `http://localhost:8080/Reserva?fecha=${fecha}&horai=${horaInicio}&horaf=${horaFin}&usuario=${nombreUsuario}&cancha=${nombreCancha}`;

    // Realizar la solicitud POST
    this.userControllerService.login(username, password).pipe(
      switchMap(credentials => {
        return this.http.post(url, credentials);
      })
    ).subscribe(result => {
      // Procesar la respuesta aquí
    });
  });
}



}
