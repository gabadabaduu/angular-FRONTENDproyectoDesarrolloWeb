import { Component } from '@angular/core';
import { UserControllerService } from 'src/app/Services/usuario/user-controller.service';
import { Usuario } from 'src/app/Modelo/usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-forms',
  templateUrl: './usuario-forms.component.html',
  styleUrls: ['./usuario-forms.component.css']
})
export class UsuarioFormsComponent {
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  constructor(private userController: UserControllerService, private router: Router, private http: HttpClient ) {}

  login(usuario: string, password: string) {
    return this.http.post<any>('/Usuario/iniciarSesion', { usuario, password });
  }

  model = new Usuario(18, 'Usuario', 'Contraseña');
  submitted = false;
  
  onSubmit() {

    this.login(this.model.name, this.model.password).subscribe(
      response => {
        // Aquí puedes manejar la respuesta del servidor
        if (response.respuesta === 'exito') {
          this.router.navigate(['/Canchas']);
          // Inicio de sesión exitoso, realizar acciones necesarias (por ejemplo, redirigir a otra página)
        } else {
          // Error de autenticación, mostrar mensaje de error
        }
      },
      error => {
        // Error en la comunicación con el servidor, mostrar mensaje de error
      }
    );
  }

  newHero() {
    this.model = new Usuario(42, 'Usuario', 'Contraseña');
  }
}
