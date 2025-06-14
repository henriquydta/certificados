import { Component } from '@angular/core';
import { ItemCertificadoComponent } from '../../components/item-certificado/item-certificado.component';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../services/certificado.service';

@Component({
  selector: 'app-certificados',
  // imports: [ItemCertificadoComponent, SecondaryButtonComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {
  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
