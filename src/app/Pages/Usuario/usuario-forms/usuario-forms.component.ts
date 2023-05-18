import { Component } from '@angular/core';
import { UserControllerService } from 'src/app/Services/usuario/user-controller.service';
import { Usuario } from 'src/app/Modelo/usuario';

@Component({
  selector: 'app-usuario-forms',
  templateUrl: './usuario-forms.component.html',
  styleUrls: ['./usuario-forms.component.css']
})
export class UsuarioFormsComponent {

constructor(private UserController : UserControllerService){}

  model = new Usuario(18, 'Usuario', 'Contraseña');
  
  submitted = false;
  
  onSubmit() {
    this.UserController.login(this.model.name, this.model.password)
      .subscribe(
        response => {
          // Manejar la respuesta del backend en caso de éxito
          
        },
        error => {
          // Manejar el error en caso de fallo
        }
      );
  }

  

  newHero() {
  this.model = new Usuario(42,'Usuario','Contraseña');
  }
  
  VUsuario(): Usuario {
  const myUsuario =  new Usuario(42, 'Maria',
                     '12345678');
  console.log('Bienvenido ' + myUsuario.name); // "My hero is called SkyDog"
  return myUsuario;
  }
  
  
}
