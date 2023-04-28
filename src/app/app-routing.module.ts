import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrearCuentaComponent } from './Pages/Usuario/crear-cuenta/crear-cuenta.component';
import {IniciarSesionComponent } from './Pages/Usuario/iniciar-sesion/iniciar-sesion.component';
import { OlvidarContrasenaComponent } from './Pages/Usuario/olvidar-contrasena/olvidar-contrasena.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { SantiagoComponent } from './Pages/Canchas/santiago/santiago.component';
import { CampinComponent } from './Pages/Canchas/campin/campin.component';
import { BuenosAiresComponent } from './Pages/Canchas/buenos-aires/buenos-aires.component';


const routes: Routes = [
  {path: "Home", component: HomepageComponent },
  {path: "Iniciar Sesion", component: IniciarSesionComponent},
  {path: "Crear Cuenta", component: CrearCuentaComponent},
  {path: "Santiago Bernabeu", component: SantiagoComponent},
  {path: "Buenos Aires", component: BuenosAiresComponent},
  {path: "Campin", component: CampinComponent},
  {path: "Recuperar Contraseña", component: OlvidarContrasenaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
RoutingComponent = [HomepageComponent, IniciarSesionComponent, CampinComponent, SantiagoComponent, BuenosAiresComponent];
}