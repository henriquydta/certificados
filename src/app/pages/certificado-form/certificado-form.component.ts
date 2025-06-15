import { Component, ViewChild } from '@angular/core';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../services/certificado.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [CommonModule, FormsModule, SecondaryButtonComponent, PrimaryButtonComponent],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {
  constructor(private certificadoService: CertificadoService, private router: Router) { }

  atividade: string = '';
  certificado: Certificado = {
    id: '',
    nome: '',
    atividades: [],
    dataEmissao: '',
  };

  campoInvalido(control: NgModel) {
    return control.touched && control.invalid;
  }

  formInvalido() {
    return this.certificado.atividades.length <= 0 || this.certificado.nome.length <= 0;
  }

  adicionarAtividade() {
    if (this.atividade.length <= 0) {
      return
    }

    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  removerAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {
    if (this.formInvalido()) {
      return
    }

    this.certificado.id = uuidv4();
    this.certificado.dataEmissao = this.dataAtual();
    this.certificadoService.adicionarCertificado(this.certificado);

    this.router.navigate(['certificados', this.certificado.id]);
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = String(dataAtual.getFullYear());

    return `${dia}/${mes}/${ano}`;
  }
}
