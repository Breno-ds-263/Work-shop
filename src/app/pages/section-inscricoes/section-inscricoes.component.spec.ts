import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInscricoesComponent } from './section-inscricoes.component';

describe('SectionInscricoesComponent', () => {
  let component: SectionInscricoesComponent;
  let fixture: ComponentFixture<SectionInscricoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionInscricoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionInscricoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
