export class TarjetaCredito{
    titular:string;
    numeroTarjeta:string;
    fechaExpiracion:string;
    cvv:number;
    fechaCreacion:Date;

    constructor(titular:string,numeroTarjeta:string,fechaExpiracion:string,cvv:number){
        this.titular=titular;
        this.numeroTarjeta=numeroTarjeta;
        this.fechaExpiracion=fechaExpiracion;
        this.cvv=cvv;
        this.fechaCreacion=new Date();
    }
}
