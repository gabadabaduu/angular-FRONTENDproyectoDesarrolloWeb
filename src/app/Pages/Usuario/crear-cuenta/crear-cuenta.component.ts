import { Component } from '@angular/core';
import { UserControllerService } from 'src/app/Services/usuario/user-controller.service';
import { Usuario } from 'src/app/Modelo/usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  model = new Usuario(18, 'Usuario', 'Contraseña');
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  Usuario: string ='';
  Password: string ='';

  submitted = false;
  
  constructor(private UserController : UserControllerService,  private router: Router , private http: HttpClient){}

  onSubmit() {
    const usuario= {
      usuario: this.Usuario,
      pass: this.Password
    };

    const url = `http://localhost:8080/Usuario?Usuario=${this.model.name}&Clave=${this.model.password}`;

    this.http.post(url, usuario)
      .subscribe(
        response => {
          console.log(response); // Imprimir la respuesta en la consola
          // Actualizar la interfaz de usuario
          this.showSuccessMessage = true;
          this.successMessage = 'Usuario creado con éxito';
          // Redirigir a otra página
          this.router.navigate(['/Canchas']);
          
        },
        error => {
           // Manejar el error en caso de fallo
  console.error(error); // Imprimir el error en la consola
  
  // Mostrar un mensaje de error al usuario
  this.showErrorMessage = true;
  this.errorMessage = 'Error al crear el usuario. Por favor, inténtelo nuevamente.';
        }
      );
  }
  newUsuario() {
  this.model = new Usuario(42,'Usuario','Contraseña');
  }
 
}
