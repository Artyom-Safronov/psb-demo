import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

type ButtonVariant = 'filled' | 'outlined' | 'text';
type ButtonColor = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
})
export class Button {
  @Input() variant: ButtonVariant = 'filled';

  @Input() color: ButtonColor = 'primary';

  @Input() disabled = false;

  @Output() appClick = new EventEmitter<Event>();

  @HostBinding('class')
  get hostClasses(): string {
    return [
      'app-button',
      `app-button--${this.variant}`,
      `app-button--${this.color}`,
      this.disabled ? 'app-button--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  onClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.appClick.emit(event);
  }
}
