import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent {

  @Input() quantity!: number;
  @Input() stock!: number;
  @Output() quantityChange = new EventEmitter<number>();

  addQuantity(): void {
    if (this.quantity < this.stock) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  subtractQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: Event): void {
    const inputValue = Number((event.target as HTMLInputElement).value);

    if (isNaN(inputValue) || inputValue < 0) {
      this.quantity = 0;
    } else if (inputValue > this.stock) {
      this.quantity = this.stock;
    } else {
      this.quantity = inputValue;
    }
    this.quantityChange.emit(this.quantity);
  }
}

