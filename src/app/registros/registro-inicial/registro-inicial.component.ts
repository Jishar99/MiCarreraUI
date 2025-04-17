import { Component } from '@angular/core';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-registro-inicial',
  imports: [NgSelectComponent],
  templateUrl: './registro-inicial.component.html',
  styleUrl: './registro-inicial.component.scss'
})
export class RegistroInicialComponent {

  esEstudiante: boolean = false;
  esProfesional: boolean = false;
  esEmpresa: boolean = false;
  esEscuela: boolean = false;

  nivelAcademicoSeleccionado: number = 0;

  nivelAcademicoOpciones = [
      { id: 1, name: 'Secundaria' },
      { id: 2, name: 'Preparatoria / Vocacional' },
      { id: 3, name: 'Nivel Superior' },
  ];

  carrerasOpciones = [
    { id: 1, name: 'Ingeniería en Sistemas Computacionales' },
    { id: 2, name: 'Medicina' },
    { id: 3, name: 'Derecho' },
    { id: 4, name: 'Contaduría Pública' },
    { id: 5, name: 'Psicología' },
    { id: 6, name: 'Administración de Empresas' },
    { id: 7, name: 'Arquitectura' },
    { id: 8, name: 'Diseño Gráfico' },
    { id: 9, name: 'Ciencias de la Comunicación' },
    { id: 10, name: 'Enfermería' },
    { id: 11, name: 'Ingeniería Industrial' },
    { id: 12, name: 'Ingeniería Civil' },
    { id: 13, name: 'Ingeniería Mecatrónica' },
    { id: 14, name: 'Gastronomía' },
    { id: 15, name: 'Relaciones Internacionales' },
    { id: 16, name: 'Pedagogía' },
    { id: 17, name: 'Trabajo Social' },
    { id: 18, name: 'Turismo' },
    { id: 19, name: 'Negocios Internacionales' },
    { id: 20, name: 'Química Farmacéutica Biológica' }
  ];
  
  

  cambioPerfil(event: Event){
    const valor = (event.target as HTMLSelectElement).value;

    // Reinicia todos los flags
    this.esEstudiante = false;
    this.esProfesional = false;
    this.esEmpresa = false;
    this.esEscuela = false;

    // Activa el que corresponda
    switch (valor) {
      case 'Estudiante':
        this.esEstudiante = true;
        break;
      case 'Profesional':
        this.esProfesional = true;
        break;
      case 'Empresa':
        this.esEmpresa = true;
        break;
      case 'Escuela':
        this.esEscuela = true;
        break;
    }
  }

}
