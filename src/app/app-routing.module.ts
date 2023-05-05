import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './Pages/Usuario/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './Pages/Usuario/iniciar-sesion/iniciar-sesion.component';
import { OlvidarContrasenaComponent } from './Pages/Usuario/olvidar-contrasena/olvidar-contrasena.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { SantiagoComponent } from './Pages/Canchas/Canchas-nO-USAR/santiago/santiago.component';
import { CampinComponent } from './Pages/Canchas/Canchas-nO-USAR/campin/campin.component';
import { BuenosAiresComponent } from './Pages/Canchas/Canchas-nO-USAR/buenos-aires/buenos-aires.component';
import { CanchasComponent } from './Pages/Canchas/canchas/canchas.component';
import { RevervarComponent } from './Pages/Canchas/Reservas/revervar/revervar.component';
import { CrearCanchaComponent } from './Pages/Canchas/crear-cancha/crear-cancha.component';
import { CancelarComponent } from './Pages/Canchas/Reservas/cancelar/cancelar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: "Iniciar-Sesion", component: IniciarSesionComponent },
  { path: "Crear-Cuenta", component: CrearCuentaComponent },
  { path: "Santiago-Bernabeu", component: SantiagoComponent },
  { path: "Buenos-Aires", component: BuenosAiresComponent },
  { path: "Campin", component: CampinComponent },
  { path: "Recuperar-Contrasena", component: OlvidarContrasenaComponent },
  { path: "Canchas", component: CanchasComponent},
  { path: "Revervar", component: RevervarComponent},
  { path: "Crear-Cancha", component: CrearCanchaComponent},
  { path: "Cancelar", component: CancelarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }