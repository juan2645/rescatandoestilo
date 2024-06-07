import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent {

  @Input() cantidad!: number;
  @Input() stock!: number;
  @Output() cantidadChange = new EventEmitter<number>();

  sumarCantidad(): void {
    if (this.cantidad < this.stock) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  restarCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  cambioCantidad(event: Event): void {
    const inputValue = Number((event.target as HTMLInputElement).value);

    if (isNaN(inputValue) || inputValue < 0) {
      this.cantidad = 0;
    } else if (inputValue > this.stock) {
      this.cantidad = this.stock;
    } else {
      this.cantidad = inputValue;
    }
    this.cantidadChange.emit(this.cantidad);
  }
}

