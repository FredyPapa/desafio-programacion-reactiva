import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from '../../models/TarjetaCredito';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {
  form:FormGroup;
  loading=false;
  titulo = "Agregar Tarjeta";
  @Output() nuevaTarjeta = new EventEmitter<any>();

  constructor(private fb:FormBuilder,
              private toastr: ToastrService) {
    this.form=this.fb.group({
      titular:["",Validators.required],
      numeroTarjeta:["",[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
      fechaExpiracion:["",[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
      cvv:["",[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
    });
  }

  ngOnInit(): void {

  }

  guardarTarjeta(){
    const TARJETA:TarjetaCredito = {
      titular:this.form.value.titular,
      numeroTarjeta:this.form.value.numeroTarjeta,
      fechaExpiracion:this.form.value.fechaExpiracion,
      cvv:this.form.value.cvv,
      fechaCreacion:new Date(),
    }
    this.loading=true;
    this.nuevaTarjeta.emit(TARJETA);
    this.toastr.success("La tarjeta fue registrada con éxito","Tarjeta registrada");
    this.limpiarFormulario();
  }

  limpiarFormulario(){
    this.loading=false;
    this.form.reset();
  }

}
