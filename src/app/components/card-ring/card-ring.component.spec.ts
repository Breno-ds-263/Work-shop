import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRingComponent } from './card-ring.component';

describe('CardRingComponent', () => {
  let component: CardRingComponent;
  let fixture: ComponentFixture<CardRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
