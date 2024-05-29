import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ang18SignalComponent } from './ang-18-signal.component';

describe('Ang18SignalComponent', () => {
  let component: Ang18SignalComponent;
  let fixture: ComponentFixture<Ang18SignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ang18SignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ang18SignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
