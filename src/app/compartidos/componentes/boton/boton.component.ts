import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [CommonModule],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.scss'
})
export class BotonComponent {

  @Input() text: string = 'Botón';
  @Input() type: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' = 'primary';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

  get classes(): string {
    return `btn btn-${this.type}`;
  }
}
