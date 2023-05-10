import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { SantiagoComponent } from './Pages/Canchas/Canchas-nO-USAR/santiago/santiago.component';
import { BuenosAiresComponent } from './Pages/Canchas/Canchas-nO-USAR/buenos-aires/buenos-aires.component';
import { CampinComponent } from './Pages/Canchas/Canchas-nO-USAR/campin/campin.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { IniciarSesionComponent } from './Pages/Usuario/iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './Pages/Usuario/crear-cuenta/crear-cuenta.component';
import { OlvidarContrasenaComponent } from './Pages/Usuario/olvidar-contrasena/olvidar-contrasena.component';
import { ContrasenaFormsComponent } from './Pages/Usuario/contrasena-forms/contrasena-forms.component';
import { CanchasComponent } from './Pages/Canchas/canchas/canchas.component';
import { UsuarioFormsComponent } from './Pages/Usuario/usuario-forms/usuario-forms.component';
import { CanchasFormsComponent } from './Pages/Canchas/canchas-forms/canchas-forms.component';
import { RevervarComponent } from './Pages/Canchas/Reservas/revervar/revervar.component';
import { CrearCanchaComponent } from './Pages/Canchas/crear-cancha/crear-cancha.component';
import { CancelarComponent } from './Pages/Canchas/Reservas/cancelar/cancelar.component';
import { CalendarioComponent } from './Pages/Canchas/calendario/calendario.component';

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
    OlvidarContrasenaComponent,
    ContrasenaFormsComponent,
    CanchasComponent,
    UsuarioFormsComponent,
    CanchasFormsComponent,
    RevervarComponent,
    CrearCanchaComponent,
    CancelarComponent,
    CalendarioComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
