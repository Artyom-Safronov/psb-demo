import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconMinusCircled } from '../../icons/icon-minus-circled/icon-minus-circled';
import { IconPlusCircled } from '../../icons/icon-plus-circled/icon-plus-circled';

@Component({
  selector: 'app-calculator-field',
  standalone: true,
  imports: [CommonModule, FormsModule, IconMinusCircled, IconPlusCircled],
  templateUrl: './calculator-field.html',
  styleUrl: './calculator-field.scss',
})
export class CalculatorField {
  @Input() label!: string;
  @Input() value!: number;
  @Input() min?: number;
  @Input() max?: number;
  @Input() step: number = 1;

  @Output() valueChange = new EventEmitter<number>();
  @Output() increase = new EventEmitter<void>();
  @Output() decrease = new EventEmitter<void>();

  onInput(value: string) {
    const parsed = Number(value);
    if (isNaN(parsed)) return;
    this.valueChange.emit(parsed);
  }

  onIncrease() {
    this.increase.emit();
  }

  onDecrease() {
    this.decrease.emit();
  }
}
