import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompartidosModule } from './compartidos/compartidos.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompartidosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MiCarreraUI';

  click(){
    alert("Di clic");
  }
}
