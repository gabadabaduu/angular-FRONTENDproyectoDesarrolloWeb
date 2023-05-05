import { Component } from '@angular/core';

import { canchas } from 'src/app/canchas';

@Component({
  selector: 'app-canchas-forms',
  templateUrl: './canchas-forms.component.html',
  styleUrls: ['./canchas-forms.component.css']
})
export class CanchasFormsComponent {
  equipo = ['Real Madrid', 'Barcelona', 'La Vinotinto', 'Millos'];
  canchas = ['Campin', 'Santiago Bernabeu', ' Ciudad Vinotinto', 'Buenos Aires'];

model = new canchas(18, 'Ciudad Vinotinto', '8:00 AM', 'Millos');

submitted = false;

onSubmit() { this.submitted = true; }


newHero() {
this.model = new canchas(42,'hola','', '');
}

skyDog(): canchas {
const mycancha =  new canchas(42, 'SkyDog',
                 'Fetch any object at any distance',
                 'Leslie Rollover');
console.log('My hero is called ' + mycancha.name); // "My hero is called SkyDog"
return mycancha;
}

//////// NOT SHOWN IN DOCS ////////

// Reveal in html:
//   Name via form.controls = {{showFormControls(heroForm)}}
showFormControls(form: any) {
return form && form.controls.name &&
form.controls.name.value; // Dr. IQ

}

}
