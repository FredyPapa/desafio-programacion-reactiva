import { Component, Input, OnInit } from '@angular/core';
import { TarjetaCredito } from '../../models/TarjetaCredito';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  @Input() listTarjetas:TarjetaCredito[] = [
    {titular:"",numeroTarjeta:"",fechaExpiracion:"",cvv:0,fechaCreacion:new Date()}
  ];

  constructor( private toastr:ToastrService) {
  }

  ngOnInit(): void {

  }

}
