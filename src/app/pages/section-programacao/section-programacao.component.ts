import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-section-programacao',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './section-programacao.component.html',
  styleUrl: './section-programacao.component.css',
})
export class SectionProgramacaoComponent {}
