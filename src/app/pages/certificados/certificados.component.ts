import { Component, OnInit, inject } from '@angular/core';
import { ItemCertificadoComponent } from '../../components/item-certificado/item-certificado.component';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../services/certificado.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {
  private certificadoService = inject(CertificadoService);

  certificados: Certificado[] = [];

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
