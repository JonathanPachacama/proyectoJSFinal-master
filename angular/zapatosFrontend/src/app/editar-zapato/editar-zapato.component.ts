import { Component, OnInit } from '@angular/core';
import {ZapatoService} from "../services/zapato.service";

@Component({
  selector: 'app-editar-zapato',
  templateUrl: './editar-zapato.component.html',
  styleUrls: ['./editar-zapato.component.css']
})
export class EditarZapatoComponent implements OnInit {

  titulo:String="Lista de todos los zapatos registrados";
  zapatos:any=[];
  disabledButtons = {
    NuevoZapatoFormSubmitButton: false
  };
  constructor(private _ZapatoService:ZapatoService) { }

  ngOnInit() {
  this._ZapatoService.get()
    .subscribe(
      (res) => {
        this.zapatos = res.json()
          .map((value) => {
            value.formularioCerrado = true;
            return value;
          });
        console.log('zapatos',this.zapatos)

      },
      (err) => {
        console.log(err);
      }
    )
  }
  actualizarZapato(zapato:any){

    console.log(zapato.id);
    this._ZapatoService.update(zapato,zapato.id)
      .subscribe(

        (res) => {
          console.log("No hubo Errores");
          console.log(res);
          zapato.formularioCerrado = !zapato.formularioCerrado;
          console.log("Respuesta:", res.json());

        },

        (err) => {
          this.disabledButtons.NuevoZapatoFormSubmitButton = false;
          console.log("Ocurrio un error", err);

        },

        () => {

          console.log("Termino la función ")

        }

      );

  }
  borrarZapato(idZapato:number){
    console.log('entro en borrar zapato');
    this._ZapatoService.delete(idZapato)
      .subscribe(
        (res) => {
          console.log('borrado correctamente');
          let zapatoBorrado = res.json();
          this.zapatos = this.zapatos.filter(value => zapatoBorrado.id != value.id);
        },
        (err) => {
          console.log(err);
        }

      );
  }

}
