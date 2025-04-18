import { Component } from '@angular/core';
import { CardRingComponent } from '../../components/card-ring/card-ring.component';

@Component({
  selector: 'app-section-palestrantes',
  standalone: true,
  imports: [CardRingComponent],
  templateUrl: './section-palestrantes.component.html',
  styleUrl: './section-palestrantes.component.css',
})
export class SectionPalestrantesComponent {}
