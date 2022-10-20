import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaCredito } from '../models/TarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaCreditoService {

  tarjetaCredito: TarjetaCredito[]=[
    {
      titular:'Fredy Papa',
      numeroTarjeta:'1234123412341234',
      fechaExpiracion:'10/23',
      cvv:123,
      fechaCreacion: new Date(),
    },
    {
      titular:'Fredy Papa',
      numeroTarjeta:'1234123412341234',
      fechaExpiracion:'12/24',
      cvv:123,
      fechaCreacion: new Date(),
    },
    {
      titular:'Fredy Papa 3',
      numeroTarjeta:'1234123412341234',
      fechaExpiracion:'15/25',
      cvv:123,
      fechaCreacion: new Date(),
    },
  ];
  tarjetasCredito$: Observable<TarjetaCredito[]>;

  constructor() {
    this.tarjetasCredito$ = new Observable<TarjetaCredito[]>((suscriptor)=>{
      suscriptor.next(this.tarjetaCredito);
    });
  }

  obtenerTarjetasCredito(){
    return this.tarjetasCredito$;
  }
}
