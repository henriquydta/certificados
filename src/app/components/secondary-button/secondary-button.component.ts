import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [CommonModule],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css'
})
export class SecondaryButtonComponent {
  @Input() textoBotao: string = 'Botão Secundário';
  @Input() phClass: string = 'ph ph-plus';
  @Input() disabled: boolean = false;
}
