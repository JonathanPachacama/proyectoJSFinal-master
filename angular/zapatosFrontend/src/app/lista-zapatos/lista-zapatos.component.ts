import { Component, OnInit } from '@angular/core';
import {ZapatoService} from "../services/zapato.service";

@Component({
  selector: 'app-lista-zapatos',
  templateUrl: './lista-zapatos.component.html',
  styleUrls: ['./lista-zapatos.component.css']
})
export class ListaZapatosComponent implements OnInit {

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

}
