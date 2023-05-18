import { Component } from '@angular/core';

import { password } from 'src/app/Modelo/reiniciar_password'

@Component({
  selector: 'app-contrasena-forms',
  templateUrl: './contrasena-forms.component.html',
  styleUrls: ['./contrasena-forms.component.css']
})
export class ContrasenaFormsComponent {

  model = new password('Mario ', 'Luigi', 'dhgfowh');
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  
  
  newHero() {
  this.model = new password('nombre','nombre de usuario','Contraseña');
  }
  
  skyDog(): password {
  const mypassword =  new password('gug', 'SkyDog',
                     'Fetch any object at any distance');
  console.log('este usuario es' + mypassword.username); // "My hero is called SkyDog"
  return mypassword;
  }
  
  //////// NOT SHOWN IN DOCS ////////
  
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
  return form && form.controls.name &&
  form.controls.name.value; // Dr. IQ
  
  }
}
