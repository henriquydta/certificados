import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { CertificadoService } from '../../services/certificado.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Certificado } from '../../interfaces/certificado';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit {
  id: string | null = null;
  certificado: Certificado | undefined;
  @Input() nome: string = '';
  @Input() dataEmissao: string = '';
  @Input() atividades: string = '';
  isOneActivity: boolean = false;

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(item => item.id == this.id);
    })
  }

  ngOnInit(): void {
    this.nome = this.certificado?.nome || '';
    this.dataEmissao = this.certificado?.dataEmissao || '';
    this.atividades = this.certificado?.atividades.join(', ') || '';
    if(this.certificado?.atividades.length == 1){
      this.isOneActivity = true;
    }
  }

  downloadCertificado() {
    html2canvas(this.certificadoElement.nativeElement, {'scale': 3}).then(
      canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpg');
        link.download = 'certificado_' + this.certificado?.nome.replaceAll(' ', '_') + '.jpg';
        link.click();
      }
    )
  }
}
