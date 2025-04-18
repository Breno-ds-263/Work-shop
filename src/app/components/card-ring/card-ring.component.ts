import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-ring',
  standalone: true,
  imports: [],
  templateUrl: './card-ring.component.html',
  styleUrl: './card-ring.component.css',
})
export class CardRingComponent {
  @Input()
  imagem: string = '';
  @Input()
  titulo: string = '';
  @Input()
  texto: string = '';
}
