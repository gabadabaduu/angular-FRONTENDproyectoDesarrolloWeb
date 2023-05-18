import { Component } from '@angular/core';
import { canchas } from 'src/app/Modelo/canchas';

@Component({
  selector: 'app-canchas-forms',
  templateUrl: './canchas-forms.component.html',
  styleUrls: ['./canchas-forms.component.css']
})
export class CanchasFormsComponent {
  equipo = ['Real Madrid', 'Barcelona', 'La Vinotinto', 'Millos'];
  canchas = ['Campin', 'Santiago Bernabeu', ' Ciudad Vinotinto', 'Buenos Aires'];

model = new canchas(18, 'Nombre de la Cancha', 'Equipo 1', 5,12);

submitted = false;

onSubmit() { this.submitted = true; }


newSubmit() {
this.model = new canchas(42,'Nombre de la Cancha','Equipo 1', 1, 2);
}


//////// NOT SHOWN IN DOCS ////////

// Reveal in html:
//   Name via form.controls = {{showFormControls(heroForm)}}
showFormControls(form: any) {
return form && form.controls.name &&
form.controls.name.value; // Dr. IQ
}

}
