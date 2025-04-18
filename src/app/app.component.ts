import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionSobreComponent } from './pages/section-sobre/section-sobre.component';
import { SectionProgramacaoComponent } from './pages/section-programacao/section-programacao.component';
import { SectionPalestrantesComponent } from './pages/section-palestrantes/section-palestrantes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SectionSobreComponent,
    SectionProgramacaoComponent,
    SectionPalestrantesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Work-shop';
}
