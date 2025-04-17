import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompartidosModule } from './compartidos/compartidos.module';
import { RegistroInicialComponent } from "./registros/registro-inicial/registro-inicial.component";
import { RegistrosModule } from './registros/registros.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompartidosModule, RegistrosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MiCarreraUI';

  click(){
    alert("Di clic");
  }
}
