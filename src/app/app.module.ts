import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { PropietariosComponent } from './pages/propietarios/propietarios.component';
import { DetallereparacionComponent } from './pages/detallereparacion/detallereparacion.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    PropietariosComponent,
    DetallereparacionComponent,
    UsuariosComponent,
    AgregarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
