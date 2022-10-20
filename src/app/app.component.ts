import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';
import { TarjetaCredito } from './models/TarjetaCredito';
import { TarjetaCreditoService } from './services/tarjeta-credito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'tarjeta-credito';
  flagFiltro:boolean=true;
  listadoTarjetaCreditoBase:TarjetaCredito[]=[];
  listadoTarjetaCredito:TarjetaCredito[]=[];
  tarjetasCredito$: Observable<TarjetaCredito[]>;
  suscripcion:any;
  titular:string="";

  constructor(
    private tarjetaCreditoService:TarjetaCreditoService
  ){
    this.suscripcion = tarjetaCreditoService.obtenerTarjetasCredito().subscribe({
      next:(listadoTarjetaCredito:TarjetaCredito[])=>{
        this.listadoTarjetaCredito = listadoTarjetaCredito;
      }
    });
    this.tarjetasCredito$ = tarjetaCreditoService.obtenerTarjetasCredito();
  }

  agregarTarjeta(tarjeta:any){
    this.listadoTarjetaCredito.push(tarjeta);
    //console.log(this.listadoTarjetaCredito);
  }

  ngOnDestroy(): void {
    this.suscripcion.unsuscribe();
  }

  filtrarTitular(){
    console.log(this.titular);
    //Devuelve el resultado como arreglo
    of(this.listadoTarjetaCredito).pipe(
      map((listadoTarjetaCredito:TarjetaCredito[])=>listadoTarjetaCredito.filter((tarjetaCredito:TarjetaCredito)=>tarjetaCredito.titular===this.titular))
    ).subscribe((listadoTarjetaCredito)=>{
      console.log(listadoTarjetaCredito);
      this.listadoTarjetaCreditoBase=this.listadoTarjetaCredito;
      this.listadoTarjetaCredito=listadoTarjetaCredito;
      this.flagFiltro=false;
    });

    //Devuelve el resultado como objetos individuales
    /*from(this.listadoTarjetaCredito).pipe(
      filter((tarjetaCredito:TarjetaCredito)=>tarjetaCredito.titular==='Fredy Papa')
    ).subscribe((listadoTarjetaCredito)=>{
      console.log(listadoTarjetaCredito);
    });*/
  }

  cancelarFiltro(){
    this.flagFiltro=true;
    this.listadoTarjetaCredito=this.listadoTarjetaCreditoBase;
  }

}
