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


  /**
   * Incrementa la cantidad en uno si es menor que el stock.
   * Emite el evento quantityChange con la nueva cantidad.
   */
  addQuantity(): void {
    if (this.quantity < this.stock) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }


  /**
   * Decrementa la cantidad en uno si es mayor que cero.
   * Emite el evento quantityChange con la nueva cantidad.
   */
  subtractQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }


  /**
   * Cambia la cantidad según el valor ingresado en el input numérico.
   * Ajusta la cantidad para que esté entre 0 y el stock máximo.
   * Emite el evento quantityChange con la nueva cantidad.
   * 
   * @param event El evento de cambio que contiene el valor actualizado del input.
   */
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

