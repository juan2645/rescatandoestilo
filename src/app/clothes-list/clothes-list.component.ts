import { Component } from '@angular/core';
import { Clothes } from './clothes';
import { ClothesCartService } from '../clothes-cart.service';

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
     },
     {
      nombre: "Sueter",
      tipo: "Lana cuello delgado",
      precio: 38500,
      stock: 3,
      imagen: "assets/img/sueter_lana.jpg",
      oferta: false,
      cantidad: 0,
     },
     {
      nombre: "Campera",
      tipo: "Polar con Cuello",
      precio: 53000,
      stock: 4,
      imagen: "assets/img/campera_polar.jpg",
      oferta: false,
      cantidad: 0,
  }
]
  
constructor(private cart: ClothesCartService) { 
}

addToCart (clothes: any): void {
  this.cart.addToCart(clothes);
  clothes.stock -= clothes.cantidad;
  clothes.cantidad = 0;
}

}
