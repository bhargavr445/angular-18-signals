import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExtendComponent } from './test-extend.component';

describe('TestExtendComponent', () => {
  let component: TestExtendComponent;
  let fixture: ComponentFixture<TestExtendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestExtendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestExtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
