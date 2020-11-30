import { Component, OnInit } from '@angular/core';
import { VehiculoModel } from 'src/app/models/vehiculo.model';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallereparacion',
  templateUrl: './detallereparacion.component.html',
  styleUrls: ['./detallereparacion.component.css']
})
export class DetallereparacionComponent implements OnInit {

  vehiculos: VehiculoModel[] = [];
  cargando = false;
  vehiculo: VehiculoModel;

  constructor(private vehiculosService: VehiculosService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.cargando = true;
    this.vehiculosService.getVehiculo()
      .subscribe(resp => {
        //console.log(resp);
        this.vehiculos = resp;
        this.cargando = false;
      });

      const id = this.route.snapshot.paramMap.get('id');

    console.log(id);

    if( id ){

      this.vehiculosService.getVehi(id)
      .subscribe( (resp: VehiculoModel) => {
        this.vehiculo = resp;
        this.vehiculo.id = id;
      });
    }
    

  }
  


  



  /*
  vehiculos: VehiculoModel[] = [];

  constructor(private activateRoute: ActivatedRoute,
    private vehiculosService: VehiculosService) {

      this.vehiculosService.getVehiculo()
      .subscribe(resp => {
        console.log(resp);
        this.vehiculos = resp;
      });

   
  }
  
  ngOnInit(): void {
    this.vehiculosService.getVehiculo()
      .subscribe(respo =>{
        console.log(respo)
        //this.vehiculos = respo
      } );
  }*/

}
