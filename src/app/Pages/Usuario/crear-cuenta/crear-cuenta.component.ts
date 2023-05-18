import { Component } from '@angular/core';
import { UserControllerService } from 'src/app/Services/usuario/user-controller.service';
import { Usuario } from 'src/app/Modelo/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  constructor(private UserController : UserControllerService,  private router: Router){}

  model = new Usuario(18, 'Usuario', 'Contraseña');
  
  submitted = false;
  
  onSubmit() {
    this.UserController.crearUsuario(this.model.name, this.model.password)
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
  
  VUsuario(): Usuario {
  const myUsuario =  new Usuario(42, 'Maria',
                     '12345678');
  console.log('Bienvenido ' + myUsuario.name); //
  return myUsuario;
  }
  
  
}
