import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RutasAppModule} from "./routes";

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaZapatosComponent } from './lista-zapatos/lista-zapatos.component';
import { ComprasComponent } from './compras/compras.component';
import { VentasComponent } from './ventas/ventas.component';
import { CrearZapatoComponent } from './crear-zapato/crear-zapato.component';
import {MasterURLService} from "./services/master-url.service";
import {UsuarioService} from "./services/usuario.service";
import {VendedorService} from "./services/vendedor.service";
import {ZapatoService} from "./services/zapato.service";
import { EditarZapatoComponent } from './editar-zapato/editar-zapato.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaZapatosComponent,
    ComprasComponent,
    VentasComponent,
    CrearZapatoComponent,
    EditarZapatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RutasAppModule
  ],
  providers: [
    MasterURLService,
    UsuarioService,
    VendedorService,
    ZapatoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
