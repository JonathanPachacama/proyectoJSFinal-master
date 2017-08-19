import { Component, OnInit } from '@angular/core';
import {ZapatoService} from "../services/zapato.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-crear-zapato',
  templateUrl: './crear-zapato.component.html',
  styleUrls: ['./crear-zapato.component.css']
})
export class CrearZapatoComponent implements OnInit {

  disabledButtons = {
    NuevoZapatoFormSubmitButton: false
  };
  nuevoZapato={};
  constructor(private _ZapatoService:ZapatoService) { }

  ngOnInit() {
  }

  crearZapato(formulario : NgForm){
    var img;
    if(formulario.value.img==undefined){
      img ="https://http2.mlstatic.com/zapato-souvenirs-en-fibrofacil-15-anos-sin-pintar-D_NQ_NP_20398-MLA20190158032_112014-F.jpg"
    }else{
      img= formulario.value.imagen
    }
    let nuevoZapato={
      nombre:formulario.value.nombre,
      imagen:img,
      precio:formulario.value.precio,
      cantidad:formulario.value.cantidad
    };

    this.disabledButtons.NuevoZapatoFormSubmitButton=true;
    this._ZapatoService.create(nuevoZapato)
      .subscribe(
        (res)=>{
          this.nuevoZapato={};
          this.disabledButtons.NuevoZapatoFormSubmitButton=false;
          console.log('zapato creado')
        },
        (err)=>{
          console.log(err)
        }
      )
  }
}
