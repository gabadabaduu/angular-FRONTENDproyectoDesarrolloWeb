import { Component } from '@angular/core';
import { canchas } from 'src/app/Modelo/canchas';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent {
  cancha = ['Campin', 'Santiago Bernabeu', ' Ciudad Vinotinto', 'Buenos Aires'];

  model = new canchas(18, 'fecha', 'nombre de cancha', 7, 15);
}
