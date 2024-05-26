import { Component, Input } from '@angular/core';
import { Clothes } from '../clothes-list/clothes';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent {

  @Input()
  clothes!: Clothes;

    sumarCantidad(clothes : Clothes): void{
      if (clothes.cantidad < clothes.stock)
        clothes.cantidad++;
    }

    restarCantidad(clothes : Clothes): void{
      if (clothes.cantidad > 0)
        clothes.cantidad--;
    }

    cambioCantidad(event: Event, clothes: Clothes): void {
      const inputValue = Number((event.target as HTMLInputElement).value);

      if (isNaN(inputValue) || inputValue < 0) {
        clothes.cantidad = 0;
      } else if (inputValue > clothes.stock) {
        clothes.cantidad = clothes.stock;
      } else {
        clothes.cantidad = inputValue;
      }
    }

}