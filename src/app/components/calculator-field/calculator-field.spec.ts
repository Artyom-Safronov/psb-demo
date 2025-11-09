import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorField } from './calculator-field';

describe('CalculatorField', () => {
  let component: CalculatorField;
  let fixture: ComponentFixture<CalculatorField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
