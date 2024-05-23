import { Component } from '@angular/core';
import { Clothes } from './clothes';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrl: './clothes-list.component.scss'
})
export class ClothesListComponent {

  clothes: Clothes[] = [
     {
         nombre: "Pantalon",
         tipo: "Cargo",
         precio: 23200,
         stock: 5,
         imagen: "assets/img/pantalon_cargo.jpg",
         oferta: false,
         cantidad: 0,
     },
     {
         nombre: "Remera blanca",
         tipo: "Algodon",
         precio: 12600,
         stock: 7,
         imagen: "assets/img/remera_blanca.jpg",
         oferta: true,
         cantidad: 0,
     },
     {
         nombre: "Buzo",
         tipo: "Polar",
         precio: 30000,
         stock: 6,
         imagen: "assets/img/buzo_polar.jpg",
         oferta: false,
         cantidad: 0,
     }
]

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
