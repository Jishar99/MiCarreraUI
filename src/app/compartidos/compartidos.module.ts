import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { BotonComponent } from './componentes/boton/boton.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BarraNavegacionComponent,
    BotonComponent,
  ],
  exports: [
    BarraNavegacionComponent,
    BotonComponent
  ]
})
export class CompartidosModule { }
