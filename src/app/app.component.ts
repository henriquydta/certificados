import { Component } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertificadoComponent } from "./_pages/certificado/certificado.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, BaseUiComponent, CertificadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'certificados';
  exibeNavbar: boolean = false;
}
