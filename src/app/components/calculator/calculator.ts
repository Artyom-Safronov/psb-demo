import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorField } from "../calculator-field/calculator-field";
import { IconMinusCircled } from "../../icons/icon-minus-circled/icon-minus-circled";
import { IconPlusCircled } from "../../icons/icon-plus-circled/icon-plus-circled";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, CalculatorField, IconMinusCircled, IconPlusCircled],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  readonly minAmount = 1_000_000;
  readonly maxAmount = 5_000_000;
  readonly amountStep = 100_000;

  readonly minTerm = 12;
  readonly maxTerm = 60;
  readonly paymentStep = 5_000;

  amount = 3_000_000;
  term = 36;
  monthlyPayment = 0;

  constructor() {
    this.updateMonthlyFromTerm();
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }

  private updateMonthlyFromTerm(): void {
    const raw = this.amount / this.term;
    this.monthlyPayment = Math.ceil(raw / 100) * 100;
  }

  onAmountInput(value: string): void {
    const parsed = Number((value || '').toString().replace(/\s/g, ''));
    if (isNaN(parsed)) {
      return;
    }
    this.amount = this.clamp(parsed, this.minAmount, this.maxAmount);
    this.updateMonthlyFromTerm();
  }

  onTermInput(value: string): void {
    const parsed = Number(value);
    if (isNaN(parsed)) {
      return;
    }
    this.term = this.clamp(parsed, this.minTerm, this.maxTerm);
    this.updateMonthlyFromTerm();
  }

  onPaymentInput(value: string): void {
    const parsed = Number((value || '').toString().replace(/\s/g, ''));
    if (isNaN(parsed) || parsed <= 0) {
      return;
    }
    this.applyMonthlyChange(parsed);
  }

  increaseAmount(): void {
    this.amount = this.clamp(this.amount + this.amountStep, this.minAmount, this.maxAmount);
    this.updateMonthlyFromTerm();
  }

  decreaseAmount(): void {
    this.amount = this.clamp(this.amount - this.amountStep, this.minAmount, this.maxAmount);
    this.updateMonthlyFromTerm();
  }

  increaseTerm(): void {
    this.term = this.clamp(this.term + 1, this.minTerm, this.maxTerm);
    this.updateMonthlyFromTerm();
  }

  decreaseTerm(): void {
    this.term = this.clamp(this.term - 1, this.minTerm, this.maxTerm);
    this.updateMonthlyFromTerm();
  }

  increasePayment(): void {
    const newPayment = this.monthlyPayment + this.paymentStep;
    this.applyMonthlyChange(newPayment);
  }

  decreasePayment(): void {
    const newPayment = Math.max(this.paymentStep, this.monthlyPayment - this.paymentStep);
    this.applyMonthlyChange(newPayment);
  }

  private applyMonthlyChange(newPayment: number): void {
    let newTerm = Math.round(this.amount / newPayment);
    newTerm = this.clamp(newTerm, this.minTerm, this.maxTerm);
    this.term = newTerm;
    this.updateMonthlyFromTerm();
  }
}
