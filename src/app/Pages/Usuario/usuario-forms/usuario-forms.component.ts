import { Component } from '@angular/core';

import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-usuario-forms',
  templateUrl: './usuario-forms.component.html',
  styleUrls: ['./usuario-forms.component.css']
})
export class UsuarioFormsComponent {
  cancha = ['Real madrid', 'messi', 'bicho', 'Barcelona'];

  model = new Usuario(18, 'Mario Luigi', 'dhgfowh', 'Ciudad Vinotinto');
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  
  
  newHero() {
  this.model = new Usuario(42,'hola','', '');
  }
  
  skyDog(): Usuario {
  const myUsuario =  new Usuario(42, 'SkyDog',
                     'Fetch any object at any distance',
                     'Leslie Rollover');
  console.log('My hero is called ' + myUsuario.name); // "My hero is called SkyDog"
  return myUsuario;
  }
  
  //////// NOT SHOWN IN DOCS ////////
  
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
  return form && form.controls.name &&
  form.controls.name.value; // Dr. IQ
  
  }
}
