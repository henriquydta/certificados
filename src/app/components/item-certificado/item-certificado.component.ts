import { Component, Input, inject } from '@angular/core';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
  private router = inject(Router);

  @Input() nome = '';
  @Input() dataEmissao = '';
  @Input() id = '';;

  redirecionaCertificado() {
    this.router.navigate(['certificados', this.id]);
  }
}
