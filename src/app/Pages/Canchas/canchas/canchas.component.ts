import { Component } from '@angular/core';
import { canchas } from 'src/app/canchas';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent {
  canchas = ['Campin', 'Santiago Bernabeu', ' Ciudad Vinotinto', 'Buenos Aires'];

  model = new canchas(18, 'Ciudad Vinotinto', '8:00 AM', 'Millos');
}
