import { Routes } from '@angular/router';
import { CertificadosComponent } from './_pages/certificados/certificados.component';
import { CertificadoFormComponent } from './_pages/certificado-form/certificado-form.component';
import { CertificadoComponent } from './_pages/certificado/certificado.component';

export const routes: Routes = [
  {
    path: "",
    component: CertificadosComponent
  },
  {
    path: "certificados/gerar",
    component: CertificadoFormComponent
  },
  {
    path: "certificados/:id",
    component: CertificadoComponent
  }
];
