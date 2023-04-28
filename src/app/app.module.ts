import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { SantiagoComponent } from './Pages/Canchas/santiago/santiago.component';
import { BuenosAiresComponent } from './Pages/Canchas/buenos-aires/buenos-aires.component';
import { CampinComponent } from './Pages/Canchas/campin/campin.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { IniciarSesionComponent } from './Pages/Usuario/iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './Pages/Usuario/crear-cuenta/crear-cuenta.component';
import { OlvidarContrasenaComponent } from './Pages/Usuario/olvidar-contrasena/olvidar-contrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SantiagoComponent,
    BuenosAiresComponent,
    CampinComponent,
    NavbarComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    OlvidarContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
