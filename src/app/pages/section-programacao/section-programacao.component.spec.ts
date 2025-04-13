import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProgramacaoComponent } from './section-programacao.component';

describe('SectionProgramacaoComponent', () => {
  let component: SectionProgramacaoComponent;
  let fixture: ComponentFixture<SectionProgramacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionProgramacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionProgramacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
