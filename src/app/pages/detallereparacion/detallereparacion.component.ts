import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculoModel } from 'src/app/models/vehiculo.model';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-detallereparacion',
  templateUrl: './detallereparacion.component.html',
  styleUrls: ['./detallereparacion.component.css']
})
export class DetallereparacionComponent {

  vehiculos: VehiculoModel[] = [];

  constructor(private activateRoute: ActivatedRoute,
    private vehiculosService: VehiculosService) {

      this.vehiculosService.getVehiculo()
      .subscribe(resp => {
        console.log(resp);
        this.vehiculos = resp;
      });

   
  }



  /*
  
  ngOnInit(): void {
    this.vehiculosService.getVehiculo()
      .subscribe(respo =>{
        console.log(respo)
        //this.vehiculos = respo
      } );
  }*/

}
