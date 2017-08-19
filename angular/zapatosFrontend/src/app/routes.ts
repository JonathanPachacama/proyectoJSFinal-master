import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import {InicioComponent} from "./inicio/inicio.component";
import {CrearZapatoComponent} from "./crear-zapato/crear-zapato.component";
import {ListaZapatosComponent} from "./lista-zapatos/lista-zapatos.component";
import {ComprasComponent} from "./compras/compras.component";
import {VentasComponent} from "./ventas/ventas.component";
import {EditarZapatoComponent} from "./editar-zapato/editar-zapato.component";




export const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path: 'crearZ', component: CrearZapatoComponent},
  {path:'listaZ',component: ListaZapatosComponent},
  {path: 'compras/:idCliente', component: ComprasComponent},
  {path: 'compras', component: ComprasComponent},
  {path: 'ventas/:idVendedor', component:VentasComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'editarZ', component: EditarZapatoComponent},

];

export const RutasAppModule: ModuleWithProviders = RouterModule.forRoot(routes);
