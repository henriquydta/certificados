import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BaseUiComponent } from "./components/base-ui/base-ui.component";
import { RouterOutlet } from '@angular/router';
import { CertificadoService } from './services/certificado.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BaseUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private certificadoService = inject(CertificadoService);

  title = 'certificados';

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
