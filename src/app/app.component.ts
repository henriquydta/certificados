import { Component } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertificadoFormComponent } from "./_pages/certificado-form/certificado-form.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, BaseUiComponent, CertificadoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'certificados';
  exibeNavbar: boolean = false;
}
