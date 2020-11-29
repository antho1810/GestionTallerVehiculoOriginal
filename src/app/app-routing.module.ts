import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { DetallereparacionComponent } from './pages/detallereparacion/detallereparacion.component';
import { PropietariosComponent } from './pages/propietarios/propietarios.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';

const routes: Routes = [
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'propietarios', component: PropietariosComponent },
  { path: 'detalle/:id', component: DetallereparacionComponent },
  { path: 'Add/:id', component: AgregarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'vehiculos' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
