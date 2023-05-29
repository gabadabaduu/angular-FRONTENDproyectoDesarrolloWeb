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

constructor(private UserController : UserControllerService, private router: Router, private http: HttpClient){}

  model = new Usuario(18, 'Usuario', 'Contraseña');
  
  submitted = false;
  
  onSubmit() {
    this.http.post(this.model.name, this.model.password)
      .subscribe(
        response => {
          console.log(response);
        this.router.navigate(['/Canchas']);
          
        },
        error => {
          // Manejar el error en caso de fallo
          console.error(error);
          this.showErrorMessage = true;
          this.errorMessage = 'Error al crear la cancha. Por favor, inténtelo nuevamente.';
        }
      );
  }

  

  newHero() {
  this.model = new Usuario(42,'Usuario','Contraseña');
  }
  
 
  
  
}
