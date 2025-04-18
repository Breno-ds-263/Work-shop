import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContatoComponent } from './section-contato.component';

describe('SectionContatoComponent', () => {
  let component: SectionContatoComponent;
  let fixture: ComponentFixture<SectionContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionContatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
