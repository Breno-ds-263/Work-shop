import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPalestrantesComponent } from './section-palestrantes.component';

describe('SectionPalestrantesComponent', () => {
  let component: SectionPalestrantesComponent;
  let fixture: ComponentFixture<SectionPalestrantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPalestrantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionPalestrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
